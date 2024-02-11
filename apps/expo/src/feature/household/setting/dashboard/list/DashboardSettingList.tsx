import type { RenderItemParams } from "react-native-draggable-flatlist";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";

import type { SettingProps } from "../type";
import { useUpdateDashboardSettingOrder } from "~/feature/household/setting/dashboard/list/useUpdateDashboardSettingOrder";
import { AddButton, Modal, UpdateButton } from "~/ui";
import { useGetDashboardBoxes } from "../..";
import { EditDashboardSetting } from "../edit/EditDashboardSetting";
import { featureMap } from "../list/feature-map";
import { RegisterDashboardSetting } from "../register/RegisterDashboardSetting";

export const DashboardSettingList = () => {
  const { settings } = useGetDashboardBoxes();
  const [data, setData] = useState<SettingProps[]>(settings);
  const [visible, setVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [settingId, setSettingId] = useState<string | null>(null);
  const setting = settings.find((s) => s.id === settingId);
  const { updateOrder } = useUpdateDashboardSettingOrder();

  const updateOrderHandler = async () => {
    try {
      await updateOrder(
        data.map((d) => ({
          settingId: d.id,
        })),
      );
      alert("更新しました");
    } catch (e) {
      console.error(e);
      alert("更新に失敗しました");
    }
  };

  const renderItem = ({
    item,
    drag,
    isActive,
    getIndex,
  }: RenderItemParams<SettingProps>) => (
    <ScaleDecorator>
      <TouchableOpacity
        onLongPress={drag}
        onPress={() => {
          setSettingId(item.id);
          setVisible(true);
        }}
        disabled={isActive}
        style={[{ backgroundColor: isActive ? "rgba(255,0,0,0.1)" : "clear" }]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 8,
            borderStyle: "solid",
            borderBottomWidth: 0.5,
            borderColor: "gray",
          }}
        >
          <Text
            style={{
              width: 20,
              textAlign: "right",
            }}
          >
            {getIndex() ? getIndex()! + 1 : 1}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Text className={"text-xl"}>{featureMap[item.feature].label}</Text>
            <Text
              style={{
                textAlign: "right",
                flex: 1,
                paddingRight: 20,
              }}
            >
              {item.argsMap.map((at) => at.type + "= " + at.value).join(", ")}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScaleDecorator>
  );

  return (
    <>
      <DraggableFlatList
        data={data}
        onDragEnd={({ data }) => setData(data)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Modal visible={visible} setVisible={setVisible}>
        <EditDashboardSetting setting={setting} />
      </Modal>
      <Modal visible={addVisible} setVisible={setAddVisible}>
        <RegisterDashboardSetting />
      </Modal>
      <View>
        <AddButton addHandler={() => setAddVisible(true)} />
        <UpdateButton updateHandler={updateOrderHandler} />
      </View>
    </>
  );
};

import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { AddButton, Modal } from "~/ui";
import { EditDashboardSetting } from "../edit/EditDashboardSetting";
import { RegisterDashboardSetting } from "../register/RegisterDashboardSetting";
import { useGetDashboardBoxes } from "../useGetDashboardBoxes";
import { featureMap } from "./feature-map";

export const DashboardSettingList = () => {
  const { settings } = useGetDashboardBoxes();
  const [visible, setVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [settingId, setSettingId] = useState<string | null>(null);

  const setting = settings.find((s) => s.id === settingId);

  return (
    <>
      <FlatList
        data={settings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={{
              borderStyle: "solid",
              borderBottomWidth: 0.5,
              borderColor: "gray",
            }}
            onPress={() => {
              setSettingId(item.id);
              setVisible(true);
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 8,
              }}
            >
              <Text
                style={{
                  width: 20,
                  textAlign: "right",
                }}
              >
                {item.order}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <Text className={"text-xl"}>
                  {featureMap[item.feature].label}
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    flex: 1,
                    paddingRight: 20,
                  }}
                >
                  {item.argsMap
                    .map((at) => at.type + "= " + at.value)
                    .join(", ")}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
      <Modal visible={visible} setVisible={setVisible}>
        <EditDashboardSetting setting={setting} />
      </Modal>
      <AddButton addHandler={() => setAddVisible(true)} />
      <Modal visible={addVisible} setVisible={setAddVisible}>
        <RegisterDashboardSetting />
      </Modal>
    </>
  );
};

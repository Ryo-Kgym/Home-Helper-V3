import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { EditDashboardSetting } from "~/feature/household/setting/dashboard/edit/EditDashboardSetting";
import { Modal } from "~/ui";
import { useGetDashboardBoxes } from "../useGetDashboardBoxes";
import { featureMap } from "./feature-map";

export const DashboardSettingList = () => {
  const { setting } = useGetDashboardBoxes();
  const [visible, setVisible] = useState(false);
  const [settingId, setSettingId] = useState<string | null>(null);

  const detail = setting.find((s) => s.id === settingId);

  return (
    <>
      <FlatList
        data={setting}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
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
                {index + 1}
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
        <EditDashboardSetting setting={detail} />
      </Modal>
    </>
  );
};

import { FlatList, Text, View } from "react-native";

import { useGetDashboardBoxes } from "~/feature/household/setting";
import { featureMap } from "./feature-map";

export const DashboardSettingList = () => {
  const { setting } = useGetDashboardBoxes();

  return (
    <View>
      <FlatList
        data={setting}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderStyle: "solid",
              borderBottomWidth: 0.5,
              borderColor: "gray",
              padding: 6,
            }}
          >
            <Text style={{ marginRight: 12, textAlign: "right", width: 18 }}>
              {index + 1}
            </Text>
            <Text className={"text-xl"}>{featureMap[item.feature].label}</Text>
            <Text
              style={{
                flex: 1,
                textAlign: "right",
              }}
            >
              {item.argsMap.map((at) => at.type + "= " + at.value).join(", ")}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

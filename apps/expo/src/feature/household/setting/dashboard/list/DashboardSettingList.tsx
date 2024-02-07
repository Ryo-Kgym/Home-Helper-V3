import { FlatList, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

import { paths } from "~/app/paths";
import { useGetDashboardBoxes } from "../useGetDashboardBoxes";
import { featureMap } from "./feature-map";

export const DashboardSettingList = () => {
  const { setting } = useGetDashboardBoxes();

  return (
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
        >
          <Link href={paths.household.setting.dashboardEdit({ id: item.id })}>
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: 1,
                  paddingHorizontal: 10,
                }}
              >
                <Text className={"text-xl"}>
                  {featureMap[item.feature].label}
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                  }}
                >
                  {item.argsMap
                    .map((at) => at.type + "= " + at.value)
                    .join(", ")}
                </Text>
              </View>
            </View>
          </Link>
        </Pressable>
      )}
    />
  );
};

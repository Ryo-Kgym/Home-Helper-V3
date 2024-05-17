import { ScrollView, View } from "react-native";

import { useGetDashboardBoxes } from "~/feature/household/setting/dashboard/useGetDashboardBoxes";

export const HouseholdDashboard = () => {
  const { getBoxNodes } = useGetDashboardBoxes();
  const boxNodes = getBoxNodes();

  return (
    <ScrollView className={"my-2"}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {boxNodes.map((Box) => Box)}
      </View>
    </ScrollView>
  );
};

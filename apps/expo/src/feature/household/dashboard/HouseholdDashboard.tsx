import { View } from "react-native";

import { useGetDashboardBoxes } from "~/feature/household/setting";

export const HouseholdDashboard = () => {
  const { getBoxNodes } = useGetDashboardBoxes();
  const boxNodes = getBoxNodes();

  return (
    <View className={"pt-1"}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {boxNodes.map((Box) => Box)}
      </View>
    </View>
  );
};

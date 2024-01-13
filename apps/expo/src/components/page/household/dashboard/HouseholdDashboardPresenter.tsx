import { Text, View } from "react-native";
import { Stack } from "expo-router";

export const HouseholdDashboardPresenter = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Dashboard" }} />
      <Text>HouseholdDashboard</Text>
    </View>
  );
};

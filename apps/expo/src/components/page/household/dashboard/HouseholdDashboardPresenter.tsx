import { View } from "react-native";
import { Stack } from "expo-router";

import { BalanceBox } from "./BalanceBox";

export const HouseholdDashboardPresenter = () => (
  <View>
    <Stack.Screen options={{ title: "Dashboard" }} />
    <BalanceBox />
  </View>
);

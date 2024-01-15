import { View } from "react-native";

import { BalanceBox } from "./BalanceBox";
import { MonthlyBox } from "./MonthlyBox";

export const HouseholdDashboardPresenter = () => (
  <View className={"gap-2 p-2"}>
    <MonthlyBox />
    <BalanceBox />
  </View>
);

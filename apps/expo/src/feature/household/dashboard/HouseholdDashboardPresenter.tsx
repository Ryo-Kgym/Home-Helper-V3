import { View } from "react-native";

import { CategoryRankingBox } from "~/feature/household/dashboard/CategoryRankingBox";
import { BalanceBox } from "./BalanceBox";
import { MonthlyBox } from "./MonthlyBox";

export const HouseholdDashboardPresenter = () => (
  <View className={"gap-2 p-2"}>
    <View className={"flex-row justify-between gap-2"}>
      <BalanceBox />
      <MonthlyBox />
    </View>
    <CategoryRankingBox />
  </View>
);

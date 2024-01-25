import { View } from "react-native";

import { CategoryRankingBox } from "~/feature/household/dashboard/CategoryRankingBox";
import { BalanceBox } from "./BalanceBox";
import { MonthlyBox } from "./MonthlyBox";

export const HouseholdDashboardPresenter = () => (
  <View>
    <View className={"flex-row"}>
      <BalanceBox />
      <MonthlyBox />
    </View>
    <CategoryRankingBox />
  </View>
);

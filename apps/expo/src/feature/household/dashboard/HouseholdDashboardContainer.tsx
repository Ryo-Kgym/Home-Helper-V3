import { View } from "react-native";

import { CategoryRankingBox } from "~/feature/household/dashboard/CategoryRankingBox";
import { getMonth } from "~/func/date/get-month";
import { BalanceBox } from "./BalanceBox";
import { MonthlyBox } from "./MonthlyBox";

export const HouseholdDashboardContainer = () => {
  const today = new Date();
  const { lastMonth } = getMonth();

  return (
    <View>
      <BalanceBox />
      <View className={"flex-row"}>
        <MonthlyBox baseDate={lastMonth} />
        <MonthlyBox baseDate={today} />
      </View>
      <CategoryRankingBox baseDate={lastMonth} />
      <CategoryRankingBox baseDate={today} />
    </View>
  );
};

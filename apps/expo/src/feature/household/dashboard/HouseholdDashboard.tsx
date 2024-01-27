import { View } from "react-native";

import { CategoryRankingBox } from "~/feature/household/dashboard/CategoryRankingBox";
import { getMonth } from "~/func/date/get-month";
import { BalanceBox } from "./BalanceBox";
import { MonthlyBox } from "./MonthlyBox";

export const HouseholdDashboard = () => {
  const today = new Date();
  const { lastMonth } = getMonth();

  return (
    <View className={"pt-1"}>
      <BalanceBox />
      <View className={"flex-row"}>
        <MonthlyBox baseDate={lastMonth} />
        <MonthlyBox baseDate={today} />
      </View>
      <View className={"flex-row"}>
        <CategoryRankingBox baseDate={lastMonth} />
        <CategoryRankingBox baseDate={today} />
      </View>
    </View>
  );
};

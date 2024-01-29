import { View } from "react-native";

import { CategoryRankingBox } from "~/feature/household/dashboard/CategoryRankingBox";
import { YearlyBox } from "~/feature/household/dashboard/YearlyBox";
import { getMonth } from "~/func/date/get-month";
import { getYear } from "~/func/date/get-year";
import { BalanceBox } from "./BalanceBox";
import { MonthlyBox } from "./MonthlyBox";

export const HouseholdDashboard = () => {
  const today = new Date();
  const { lastMonth } = getMonth();
  const { lastYear } = getYear();

  return (
    <View className={"pt-1"}>
      <BalanceBox />
      <View className={"flex-row"}>
        <YearlyBox baseDate={lastYear} />
        <YearlyBox baseDate={today} />
      </View>
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

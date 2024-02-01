import { View } from "react-native";

import { CategoryRankingBox } from "~/feature/household/dashboard/CategoryRankingBox";
import { SettingBox } from "~/feature/household/dashboard/SettingBox";
import { YearlyBox } from "~/feature/household/dashboard/YearlyBox";
import { getMonth } from "~/func/date/get-month";
import { getYear } from "~/func/date/get-year";
import { BalanceBox } from "./BalanceBox";
import { MonthlyBox } from "./MonthlyBox";
import { RegisterBox } from "./RegisterBox";

export const HouseholdDashboard = () => {
  const today = new Date();
  const { lastMonth } = getMonth();
  const { lastYear } = getYear();

  return (
    <View className={"pt-1"}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <BalanceBox />
        <RegisterBox />
        <SettingBox />
        <YearlyBox baseDate={lastYear} />
        <YearlyBox baseDate={today} />
        <MonthlyBox baseDate={lastMonth} />
        <MonthlyBox baseDate={today} />
        <CategoryRankingBox baseDate={lastMonth} />
        <CategoryRankingBox baseDate={today} />
      </View>
    </View>
  );
};

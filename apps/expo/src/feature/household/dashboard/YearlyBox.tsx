import { Text, View } from "react-native";

import { paths } from "~/app/paths";
import { getYear } from "~/func/date/get-year";
import { DashboardFrame } from "./DashboardFrame";
import { useCalcTotal } from "./useCalcTotal";

export const YearlyBox = ({ baseDate }: { baseDate: Date }) => {
  const { firstDayOfYear, lastDayOfYear, year } = getYear(baseDate);
  const { calcTotal } = useCalcTotal({
    fromDate: firstDayOfYear,
    toDate: lastDayOfYear,
  });
  const { incomeTotal, outcomeTotal, balance } = calcTotal();

  return (
    <DashboardFrame
      label={`${year}年の実績`}
      href={paths.household.calendar(baseDate)}
      size={"w-1/2"}
    >
      <View>
        <View className={"flex-row items-center"}>
          <Text className={"text-center"}>収入</Text>
          <Text className={"w-40 text-right text-lg text-green-500"}>
            {incomeTotal.toLocaleString()}
          </Text>
        </View>
        <View className={"flex-row items-center"}>
          <Text className={"text-center"}>支出</Text>
          <Text className={"w-40 text-right text-lg text-red-500"}>
            {outcomeTotal.toLocaleString()}
          </Text>
        </View>
        <View className={"flex-row items-center"}>
          <Text className={"text-center"}>差引</Text>
          <Text className={"w-40 text-right text-lg"}>
            {balance.toLocaleString()}
          </Text>
        </View>
      </View>
    </DashboardFrame>
  );
};

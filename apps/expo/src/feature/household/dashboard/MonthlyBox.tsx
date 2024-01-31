import { Text, View } from "react-native";

import { paths } from "~/app/paths";
import { getMonth } from "~/func/date/get-month";
import { useCalcTotal } from "~/hooks/household/detail/useCalcTotal";
import { DashboardFrame } from "./DashboardFrame";

export const MonthlyBox = ({ baseDate }: { baseDate: Date }) => {
  const { firstDayOfMonth, lastDayOfMonth, month } = getMonth(baseDate);
  const { calcTotal } = useCalcTotal({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
  });
  const { incomeTotal, outcomeTotal, balance } = calcTotal();

  return (
    <DashboardFrame
      label={`${month}月の実績`}
      href={paths.household.calendar({ date: baseDate })}
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

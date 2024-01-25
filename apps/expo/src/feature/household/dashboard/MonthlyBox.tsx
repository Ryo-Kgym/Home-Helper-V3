import { Text, View } from "react-native";

import { paths } from "~/app/paths";
import { DashboardFrame } from "./DashboardFrame";
import { useCalcMonthly } from "./useCalcMonthly";

export const MonthlyBox = () => {
  const { incomeTotal, outcomeTotal, diff, month } = useCalcMonthly();

  return (
    <DashboardFrame
      label={`${month}月の実績`}
      href={paths.household.calendar(new Date())}
    >
      <View>
        <View className={"flex-row items-center"}>
          <Text className={"text-center"}>収入</Text>
          <Text className={"w-32 text-right text-2xl text-green-500"}>
            {incomeTotal.toLocaleString()}
          </Text>
        </View>
        <View className={"flex-row items-center"}>
          <Text className={"text-center"}>支出</Text>
          <Text className={"w-32 text-right text-2xl text-red-500"}>
            {outcomeTotal.toLocaleString()}
          </Text>
        </View>
        <View className={"flex-row items-center"}>
          <Text className={"text-center"}>差引</Text>
          <Text className={"w-32 text-right text-2xl"}>
            {diff.toLocaleString()}
          </Text>
        </View>
      </View>
    </DashboardFrame>
  );
};

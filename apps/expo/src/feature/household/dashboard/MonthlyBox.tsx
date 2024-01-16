import { Text, View } from "react-native";

import { paths } from "~/app/paths";
import { DashboardFrame } from "./DashboardFrame";
import { useCalcMonthly } from "./useCalcMonthly";

export const MonthlyBox = () => {
  const { incomeTotal, outcomeTotal, diff } = useCalcMonthly();

  return (
    <DashboardFrame
      label={"今月の実績"}
      href={paths.household.calendar(new Date())}
    >
      <View>
        <View className={"flex-row items-center"}>
          <Text className={"w-1/3 text-center"}>収入</Text>
          <Text className={"w-2/3 text-right text-3xl text-green-500"}>
            {incomeTotal.toLocaleString()}
          </Text>
        </View>
        <View className={"flex-row items-center"}>
          <Text className={"w-1/3 text-center"}>支出</Text>
          <Text className={"w-2/3 text-right text-3xl text-red-500"}>
            {outcomeTotal.toLocaleString()}
          </Text>
        </View>
        <View className={"flex-row items-center"}>
          <Text className={"w-1/3 text-center"}>差引</Text>
          <Text className={"w-2/3 text-right text-3xl"}>
            {diff.toLocaleString()}
          </Text>
        </View>
      </View>
    </DashboardFrame>
  );
};

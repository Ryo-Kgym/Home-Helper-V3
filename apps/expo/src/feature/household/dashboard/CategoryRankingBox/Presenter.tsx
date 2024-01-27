import { Text, View } from "react-native";

import { paths } from "~/app/paths";
import { DashboardFrame } from "~/feature/household/dashboard/DashboardFrame";

export const Presenter = ({
  baseDate,
  month,
  categories,
  loading,
}: {
  baseDate: Date;
  month: number;
  categories: {
    categoryName: string;
    amount: number;
  }[];
  loading: boolean;
}) => (
  <DashboardFrame
    label={`${month}月の変動支出`}
    href={paths.household.categoryRanking(baseDate)}
    size={"w-1/2"}
    scroll={120}
  >
    {loading ? (
      <Text>Loading...</Text>
    ) : (
      <>
        {categories.map((c, i) => (
          <View key={i} className={"flex-row items-center"}>
            <Text className={"w-1/12 text-xs"}>{i + 1}</Text>
            <View className={"w-11/12 flex-row items-center justify-between"}>
              <Text className={"text-md text-gray-500"}>{c.categoryName}</Text>
              <Text className={"text-right text-lg"}>
                {c.amount.toLocaleString()}
              </Text>
            </View>
          </View>
        ))}
      </>
    )}
  </DashboardFrame>
);

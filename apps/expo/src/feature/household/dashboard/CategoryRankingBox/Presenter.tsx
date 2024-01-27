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
    label={`${month}月の支出`}
    href={paths.household.categoryRanking(baseDate)}
    size={"w-1/2"}
  >
    {loading ? (
      <Text>Loading...</Text>
    ) : (
      <View>
        {categories.map((c, i) => (
          <View key={i} className={"flex-row items-center"}>
            <Text className={"text-md w-1/12"}>{i + 1}</Text>
            <View className={"w-11/12"}>
              <Text className={"text-md text-gray-500"}>{c.categoryName}</Text>
              <Text className={"text-right text-lg"}>
                {c.amount.toLocaleString()}
              </Text>
            </View>
          </View>
        ))}
      </View>
    )}
  </DashboardFrame>
);

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
    label={`${month}月の支出ランキング`}
    href={paths.household.categoryRanking(baseDate)}
    size={"w-full"}
  >
    {loading ? (
      <Text>Loading...</Text>
    ) : (
      <View>
        {categories.map((c, i) => (
          <View key={i} className={"flex-row items-center"}>
            <Text className={"w-1/6 text-lg"}>{i + 1}</Text>
            <Text className={"w-1/2 text-xl"}>{c.categoryName}</Text>
            <Text className={"w-1/3 text-right text-2xl"}>
              {c.amount.toLocaleString()}
            </Text>
          </View>
        ))}
      </View>
    )}
  </DashboardFrame>
);

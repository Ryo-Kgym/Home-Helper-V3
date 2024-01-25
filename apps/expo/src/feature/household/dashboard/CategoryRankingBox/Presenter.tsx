import { Text, View } from "react-native";

import { paths } from "~/app/paths";
import { DashboardFrame } from "~/feature/household/dashboard/DashboardFrame";

export const Presenter = ({
  month,
  categories,
}: {
  month: number;
  categories: {
    categoryName: string;
    amount: number;
  }[];
}) => (
  <DashboardFrame
    label={`${month}月のランキング`}
    href={paths.household.calendar(new Date())}
    size={"w-full"}
  >
    <View>
      {categories.map((c, i) => (
        <View key={i} className={"flex-row items-center"}>
          <Text className={"w-1/6 text-xl"}>{i + 1}</Text>
          <Text className={"w-1/2 text-xl"}>{c.categoryName}</Text>
          <Text className={"w-1/3 text-right text-2xl"}>
            {c.amount.toLocaleString()}
          </Text>
        </View>
      ))}
    </View>
  </DashboardFrame>
);

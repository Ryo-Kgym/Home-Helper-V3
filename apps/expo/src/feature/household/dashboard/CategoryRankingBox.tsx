import { Text, View } from "react-native";

import { paths } from "~/app/paths";
import { DashboardFrame } from "./DashboardFrame";

export const CategoryRankingBox = () => {
  return (
    <DashboardFrame
      label={"ランキング"}
      href={paths.household.calendar(new Date())}
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
};

const categories = [
  {
    amount: 1000,
    categoryName: "食費",
    memo: null,
  },
  {
    amount: 2000,
    categoryName: "外食",
    memo: null,
  },
  {
    amount: 3000,
    categoryName: "交通費",
    memo: null,
  },
  {
    amount: 4000,
    categoryName: "交際費",
    memo: null,
  },
  {
    amount: 5000,
    categoryName: "娯楽",
    memo: null,
  },
];

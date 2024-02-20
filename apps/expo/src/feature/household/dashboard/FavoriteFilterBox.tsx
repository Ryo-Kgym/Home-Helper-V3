import { Text, View } from "react-native";

import { DashboardFrame } from "~/feature/household/dashboard/DashboardFrame";
import { useGetCategoryTotal } from "~/hooks/household/total/useGetCategoryTotal";

export const FavoriteFilterBox = ({ filterId }: { filterId: string }) => {
  filterId;
  const { categoryTotal, calcTotal } = useGetCategoryTotal({
    fromDate: new Date("2024-01-01"),
    toDate: new Date("2024-12-31"),
    iocomeType: [],
    genreType: [],
  });

  return (
    <DashboardFrame
      label={`お気に入り条件`}
      href={"/"}
      size={"100%"}
      scroll={120}
      footer={
        <View className={"pt-1"}>
          <Text className={"text-right text-gray-500"}>
            合計：{calcTotal().toLocaleString()}
          </Text>
        </View>
      }
    >
      {categoryTotal
        .sort((a, b) => b.amount - a.amount)
        .map((c, i) => (
          <View key={i} className={"flex-row items-center"}>
            <Text className={"w-1/12 text-xs"}>{i + 1}</Text>
            <View className={"w-11/12 flex-row items-center justify-between"}>
              <Text className={"text-md text-gray-500"}>
                {c.categoryName.slice(0, 7)}
              </Text>
              <Text className={"text-right text-lg"}>
                {c.amount.toLocaleString()}
              </Text>
            </View>
          </View>
        ))}
    </DashboardFrame>
  );
};

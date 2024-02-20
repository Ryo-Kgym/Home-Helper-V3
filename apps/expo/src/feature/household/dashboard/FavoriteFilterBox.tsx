import { Text, View } from "react-native";

import type { WithAmountType } from "~/hooks/household/total/total-category";
import { DashboardFrame } from "~/feature/household/dashboard/DashboardFrame";
import { useGetFavoriteFilter } from "~/hooks/household/favoriteFilter/useGetFavoriteFilter";
import { useGetCategoryTotal } from "~/hooks/household/total/useGetCategoryTotal";
import { genreTypeArray } from "~/types/genre-type";

export const FavoriteFilterBox = ({ filterId }: { filterId: string }) => {
  const { getFilter, getProfile } = useGetFavoriteFilter(filterId);
  const { categoryIdList, fromDate, toDate } = getFilter();
  const { name } = getProfile();

  const income = useGetCategoryTotal({
    fromDate,
    toDate,
    iocomeType: ["INCOME"],
    genreType: genreTypeArray,
    filter: (d) => categoryIdList.includes(d.categoryId),
  });

  const outcome = useGetCategoryTotal({
    fromDate,
    toDate,
    iocomeType: ["OUTCOME"],
    genreType: genreTypeArray,
    filter: (d) => categoryIdList.includes(d.categoryId),
  });

  const Render = ({ categoryTotal }: { categoryTotal: WithAmountType[] }) => (
    <View className={"w-1/2"}>
      {categoryTotal
        .sort((a, b) => b.amount - a.amount)
        .map((c, i) => (
          <View key={i} className={"flex-row items-center"}>
            <Text className={"w-[4%] text-xs"}>{i + 1}</Text>
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
    </View>
  );

  return (
    <DashboardFrame
      label={`${name}`}
      href={"/"}
      size={"100%"}
      scroll={120}
      footer={
        <View className={"pt-1"}>
          <Text className={"text-right text-gray-500"}>
            合計：{income.calcTotal().toLocaleString()}
          </Text>
        </View>
      }
    >
      <View
        style={{
          flexDirection: "row",
          gap: 2,
        }}
      >
        <Render categoryTotal={income.categoryTotal} />
        <Render categoryTotal={outcome.categoryTotal} />
      </View>
    </DashboardFrame>
  );
};

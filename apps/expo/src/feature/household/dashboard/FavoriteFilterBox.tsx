import { Text, View } from "react-native";

import type { WithAmountType } from "~/hooks/household/total/total-category";
import { DashboardFrame } from "~/feature/household/dashboard/DashboardFrame";
import { useGetFavoriteFilterTotal } from "~/hooks/household/favoriteFilter/useGetFavoriteFilterTotal";

export const FavoriteFilterBox = ({ filterId }: { filterId: string }) => {
  const { income, outcome, name, loading } =
    useGetFavoriteFilterTotal(filterId);

  if (loading) {
    return null;
  }

  return (
    <DashboardFrame
      label={`${name}`}
      href={"/"}
      size={"100%"}
      scroll={120}
      footer={
        <View
          className={"pt-1"}
          style={{
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Text className={"w-1/2 pr-2 text-right text-gray-500"}>
            収入：{income.calcTotal().toLocaleString()}
          </Text>
          <Text className={"w-1/2 pr-2 text-right text-gray-500"}>
            支出：{outcome.calcTotal().toLocaleString()}
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
        <IocomeBox categoryTotal={income.categoryTotal} />
        <IocomeBox categoryTotal={outcome.categoryTotal} />
      </View>
    </DashboardFrame>
  );
};

const IocomeBox = ({ categoryTotal }: { categoryTotal: WithAmountType[] }) => (
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

import { useState } from "react";
import { FlatList, Text, View } from "react-native";

import type { IocomeType } from "~/types/iocome-type";
import { getYear } from "~/func/date/get-year";
import { useGetCategoryTotal } from "~/hooks/household/total/useGetCategoryTotal";
import { EditableIocomeType } from "~/ui";

export const YearlyCategoryRankList = ({ year }: { year: Date }) => {
  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");

  const { firstDayOfYear, lastDateNotGreaterThanToday } = getYear(year);
  const { categoryTotal, loading } = useGetCategoryTotal({
    fromDate: firstDayOfYear,
    toDate: lastDateNotGreaterThanToday,
    iocomeType: [iocomeType],
  });

  if (loading) return <Text>loading...</Text>;

  return (
    <>
      {/*TODO モーダルに隠す*/}
      <EditableIocomeType value={iocomeType} setValue={setIocomeType} />
      <FlatList
        data={categoryTotal}
        keyExtractor={(item) => item.categoryId}
        renderItem={({ item, index }) => (
          <View
            key={item.categoryId}
            className={"flex-row items-center border-b border-b-gray-300 py-2"}
          >
            <Text className={"w-1/12 pr-2 text-right text-sm text-gray-600"}>
              {index + 1}
            </Text>
            <View className={"flex-1 flex-row justify-between"}>
              <Text className={"text-xl text-gray-600"}>
                {item.categoryName}
              </Text>
              <Text className={"pr-2 text-right text-xl"}>
                {item.amount.toLocaleString()}
              </Text>
            </View>
          </View>
        )}
      />
    </>
  );
};

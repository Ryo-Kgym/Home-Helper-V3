import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

import type { IocomeType } from "~/types/iocome-type";
import { paths } from "~/app/paths";
import { getYear } from "~/func/date/get-year";
import { sortBy } from "~/hooks/household/total/sort-by";
import { useGetCategoryTotal } from "~/hooks/household/total/useGetCategoryTotal";
import { EditableIocomeType, FilterButton, Modal } from "~/ui";

export const YearlyCategoryRankList = ({ year }: { year: Date }) => {
  const [visible, setVisible] = useState(false);
  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");
  const { push } = useRouter();

  const { firstDayOfYear, lastDateNotGreaterThanToday } = getYear(year);
  const { categoryTotal, loading } = useGetCategoryTotal({
    fromDate: firstDayOfYear,
    toDate: lastDateNotGreaterThanToday,
    iocomeType: [iocomeType],
    sort: sortBy.amount.desc,
  });

  if (loading) return <Text>loading...</Text>;

  return (
    <>
      <FilterButton pressHandler={() => setVisible(!visible)} />
      <Modal visible={visible} setVisible={setVisible}>
        <View>
          <EditableIocomeType value={iocomeType} setValue={setIocomeType} />
        </View>
      </Modal>
      <FlatList
        data={categoryTotal}
        keyExtractor={(item) => item.categoryId}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() =>
              push(
                paths.household.detailListByCategory({
                  year,
                  categoryId: item.categoryId,
                }),
              )
            }
          >
            <View
              key={item.categoryId}
              className={
                "flex-row items-center border-b border-b-gray-300 py-2"
              }
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
          </Pressable>
        )}
      />
    </>
  );
};

import { Text, View } from "react-native";
import { useGetAggregatedCategoriesByDateQuery } from "@/turbo/graphql/household";

import { paths } from "~/app/paths";
import { getMonth } from "~/func/date/get-month";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { DashboardFrame } from "./DashboardFrame";

export const CategoryRankingBox = () => {
  const { groupId } = useSaveGroupId();
  const { firstDayOfMonth, lastDayOfMonth } = getMonth();

  const [{ data }] = useGetAggregatedCategoriesByDateQuery({
    variables: {
      fromDate: firstDayOfMonth,
      toDate: lastDayOfMonth,
      groupId,
      iocomeType: "OUTCOME",
      limit: 10,
    },
  });

  const categories =
    data?.group?.dailies.map((d) => ({
      categoryName: d.categoryName,
      amount: d.total,
    })) ?? [];

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

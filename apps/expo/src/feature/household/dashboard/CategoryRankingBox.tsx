import { Text, View } from "react-native";

import type { GenreType } from "~/types/genre-type";
import { paths } from "~/app/paths";
import { DashboardFrame } from "~/feature/household/dashboard/DashboardFrame";
import { getMonth } from "~/func/date/get-month";
import { useGetCategoryTotal } from "~/hooks/household/total/useGetCategoryTotal";
import { getGenreTypeLabel } from "~/types/genre-type";

export const CategoryRankingBox = ({
  month,
  genreType,
}: {
  month: Date;
  genreType: GenreType[];
}) => {
  const { firstDayOfMonth, lastDayOfMonth, month: monthNum } = getMonth(month);
  const { categoryTotal } = useGetCategoryTotal({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
    iocomeType: ["OUTCOME"],
    genreType,
  });

  return (
    <DashboardFrame
      label={`${monthNum}月の${generateTitle({ genreType })}支出`}
      href={paths.household.categoryRanking({ date: month })}
      size={"50%"}
      scroll={120}
    >
      {categoryTotal
        .sort((a, b) => b.amount - a.amount)
        .map((c, i) => (
          <View key={i} className={"flex-row items-center"}>
            <Text className={"w-1/12 text-xs"}>{i + 1}</Text>
            <View className={"w-11/12 flex-row items-center justify-between"}>
              <Text className={"text-md text-gray-500"}>{c.categoryName}</Text>
              <Text className={"text-right text-lg"}>
                {c.amount.toLocaleString()}
              </Text>
            </View>
          </View>
        ))}
    </DashboardFrame>
  );
};

const generateTitle = ({ genreType }: { genreType: GenreType[] }) => {
  return genreType.map((g) => getGenreTypeLabel(g)).join("・");
};

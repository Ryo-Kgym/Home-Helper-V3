import { useGetAggregatedCategoriesByDateQuery } from "@/turbo/graphql/household";

import { Presenter } from "~/feature/household/dashboard/CategoryRankingBox/Presenter";
import { getMonth } from "~/func/date/get-month";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { useGetTransferCategory } from "~/hooks/household/transfer/useGetTransferCategory";

export const Container = () => {
  const { groupId } = useSaveGroupId();
  const { firstDayOfMonth, lastDayOfMonth, month } = getMonth();

  const { outcomeCategory } = useGetTransferCategory();

  const [{ data }] = useGetAggregatedCategoriesByDateQuery({
    variables: {
      fromDate: firstDayOfMonth,
      toDate: lastDayOfMonth,
      groupId,
      iocomeType: "OUTCOME",
      limit: 10,
      excludeCategoryIds: [outcomeCategory.id],
    },
  });

  const categories =
    data?.group?.dailies.map((d) => ({
      categoryName: d.categoryName ?? "",
      amount: d.total as number,
    })) ?? [];

  return <Presenter month={month} categories={categories} />;
};

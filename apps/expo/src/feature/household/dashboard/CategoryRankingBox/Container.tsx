import {
  useGetAggregatedCategoriesByDateQuery,
  useGetTransferCategoryByQuery,
} from "@/turbo/graphql/household";

import { Presenter } from "~/feature/household/dashboard/CategoryRankingBox/Presenter";
import { getMonth } from "~/func/date/get-month";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";

export const Container = () => {
  const { groupId } = useSaveGroupId();
  const { firstDayOfMonth, lastDayOfMonth, month } = getMonth();

  const [{ data: transferCategoryData }] = useGetTransferCategoryByQuery({
    variables: {
      groupId,
    },
  });
  const outcomeTransferCategoryId =
    transferCategoryData?.transferCategory?.outcomeCategory.categoryId ?? "";

  const [{ data }] = useGetAggregatedCategoriesByDateQuery({
    variables: {
      fromDate: firstDayOfMonth,
      toDate: lastDayOfMonth,
      groupId,
      iocomeType: "OUTCOME",
      limit: 10,
      excludeCategoryIds: [outcomeTransferCategoryId],
    },
  });

  const categories =
    data?.group?.dailies.map((d) => ({
      categoryName: d.categoryName ?? "",
      amount: d.total as number,
    })) ?? [];

  return <Presenter month={month} categories={categories} />;
};

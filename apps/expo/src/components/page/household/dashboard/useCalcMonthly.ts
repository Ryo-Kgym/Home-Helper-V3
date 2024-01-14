import {
  useGetDailyDetailByDateQuery,
  useGetTransferCategoryByQuery,
} from "@/turbo/graphql/household";

import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";

export const useCalcMonthly = () => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const { groupId } = useSaveGroupId();

  const [{ data }] = useGetDailyDetailByDateQuery({
    variables: {
      groupId,
      fromDate: firstDayOfMonth.toISOString().slice(0, 10),
      toDate: lastDayOfMonth.toISOString().slice(0, 10),
    },
  });

  const [{ data: transData }] = useGetTransferCategoryByQuery({
    variables: {
      groupId,
    },
  });

  const incomeTotal =
    data?.dailyDetailByDateList
      .filter(
        (d) => d.categoryByCategoryId.genreByGenreId.iocomeType === "INCOME",
      )
      .filter(
        (d) =>
          d.categoryByCategoryId.categoryId !==
          transData?.transferCategory?.incomeCategory.categoryId,
      )
      .reduce((acc, d) => (acc + d.amount) as number, 0) ?? 0;

  const outcomeTotal =
    data?.dailyDetailByDateList
      .filter(
        (d) => d.categoryByCategoryId.genreByGenreId.iocomeType === "OUTCOME",
      )
      .filter(
        (d) =>
          d.categoryByCategoryId.categoryId !==
          transData?.transferCategory?.outcomeCategory.categoryId,
      )
      .reduce((acc, d) => (acc + d.amount) as number, 0) ?? 0;

  return {
    incomeTotal,
    outcomeTotal,
    diff: incomeTotal - outcomeTotal,
  };
};

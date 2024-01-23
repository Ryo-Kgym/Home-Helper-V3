import { useGetTransferCategoryByQuery } from "@/turbo/graphql/household";

import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { useGetDetails } from "~/hooks/household/detail/useGetDetails";

export const useCalcMonthly = () => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const { groupId } = useSaveGroupId();

  const [{ data: transData }] = useGetTransferCategoryByQuery({
    variables: {
      groupId,
    },
  });

  const { term } = useGetDetails({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
    converter: {
      daily: (d) => ({
        categoryId: d.category.id,
        iocomeType: d.genre.iocomeType,
        amount: d.amount,
      }),
      creditCardSummary: (d) => ({
        categoryId: "",
        iocomeType: d.genre.iocomeType,
        amount: d.total,
      }),
    },
    filter: {
      term: {
        income: (d) =>
          d.categoryId !==
          transData?.transferCategory?.incomeCategory.categoryId,
        outcome: (d) =>
          d.categoryId !==
          transData?.transferCategory?.outcomeCategory.categoryId,
      },
    },
  });

  return {
    incomeTotal: term.incomeTotal,
    outcomeTotal: term.outcomeTotal,
    diff: term.balance,
  };
};

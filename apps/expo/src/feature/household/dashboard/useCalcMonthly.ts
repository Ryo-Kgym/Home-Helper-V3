import { useGetTransferCategoryByQuery } from "@/turbo/graphql/household";

import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { useGetDetails } from "~/hooks/household/detail/useGetDetails";

export const useCalcMonthly = () => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const { groupId } = useSaveGroupId();

  const [{ data: _transData }] = useGetTransferCategoryByQuery({
    variables: {
      groupId,
    },
  });

  const { term } = useGetDetails({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
    dailyConverter: (d) => ({
      iocomeType: d.genre.iocomeType,
      amount: d.amount,
    }),
    creditCardSummaryConverter: (d) => ({
      iocomeType: d.genre.iocomeType,
      amount: d.total,
    }),
  });

  return {
    incomeTotal: term.incomeTotal,
    outcomeTotal: term.outcomeTotal,
    diff: term.balance,
  };
};

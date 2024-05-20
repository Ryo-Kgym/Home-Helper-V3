/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useFindUser } from "@persistence/browser/client/useFindUser";
import { useGetAccountBalanceListQuery } from "@v3/graphql/household";

export const useGetAccountBalanceList = (
  fromDate: Date | null,
  toDate: Date,
) => {
  const { group } = useFindUser();
  const [{ data, fetching, error }] = useGetAccountBalanceListQuery({
    variables: {
      fromDate: fromDate ?? new Date(0),
      toDate,
      groupId: group.id,
    },
  });

  const total = data?.account?.reduce(
    (acc, cur) =>
      Number(
        cur?.dailyDetails.reduce((acc, cur) => {
          const isIncome = cur.genre.iocomeType === "INCOME";
          return acc + cur.amount * (isIncome ? 1 : -1);
        }, 0),
      ) + acc,
    0,
  );

  return { data, fetching, error, total };
};

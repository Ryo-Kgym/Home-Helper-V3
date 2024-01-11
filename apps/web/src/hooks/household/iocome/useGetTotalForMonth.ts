/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import {
  useGetCreditCardSummaryBetweenWithdrawalDateQuery,
  useGetTotalBetweenDateQuery,
} from "@graphql/hasura/generated/hasuraGraphql";
import { createDateList } from "@hooks/household/iocome/createDateList";
import { DailyTotal } from "@domain/model/household/DailyTotal";
import { useDate } from "@hooks/date/useDate";
import { useGroup } from "@hooks/group/useGroup";

export const useGetTotalForMonth = (date: Date) => {
  const { groupId } = useGroup();
  const { offsetDate } = useDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = offsetDate(new Date(year, month, 1)).getDay();
  const firstDate = offsetDate(new Date(year, month, -firstDay + 1));
  const lastDate = offsetDate(new Date(year, month + 1, 0));

  const [{ data }, refetch] = useGetTotalBetweenDateQuery({
    variables: {
      fromDate: firstDate,
      toDate: lastDate,
      groupId,
    },
  });
  const [{ data: creditData }] =
    useGetCreditCardSummaryBetweenWithdrawalDateQuery({
      variables: {
        fromDate: firstDate,
        toDate: lastDate,
        groupId,
      },
    });
  const { convertToYmd } = useDate();

  const dailyTotalList: DailyTotal[] = createDateList(date).map((date) => {
    const incomeTotal = data?.incomeTotalByDate?.find(
      (e) => e.date === convertToYmd(date),
    )?.total;
    const outcomeTotal = data?.outcomeTotalByDate?.find(
      (e) => e.date === convertToYmd(date),
    )?.total;
    const filteredCreditCardSummary =
      creditData?.allCreditCardSummariesList?.filter(
        (e) => e.withdrawalDate === convertToYmd(date),
      ) ?? [];

    const creditCardTotal =
      filteredCreditCardSummary.length > 0
        ? filteredCreditCardSummary.reduce(
            (acc, cur) => acc + Number(cur.totalAmount),
            0,
          )
        : undefined;

    return {
      date,
      incomeTotal: incomeTotal ? Number(incomeTotal) : undefined,
      outcomeTotal: calcOutcomeTotal(outcomeTotal, creditCardTotal),
    };
  });

  return {
    dailyTotalList,
    refetch: () => {
      refetch({ requestPolicy: "network-only" });
    },
    data,
  };
};

const calcOutcomeTotal = (
  outcomeTotal: number | undefined,
  creditCardTotal: number | undefined,
) => {
  if (outcomeTotal === undefined && creditCardTotal === undefined) {
    return undefined;
  }
  if (outcomeTotal === undefined) {
    return Number(creditCardTotal);
  }
  if (creditCardTotal === undefined) {
    return Number(outcomeTotal);
  }
  return Number(outcomeTotal) + Number(creditCardTotal);
};

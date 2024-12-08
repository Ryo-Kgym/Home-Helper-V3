/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGetDailyByAccountIdQuery } from "@v3/graphql/household";

import { useGroup } from "~/hooks/group/useGroup";
import { DailyDetail } from "../../../domain/model/household/DailyDetail";
import { IocomeType } from "../../../domain/model/household/IocomeType";

export const useGetDailyDetailByDateAccountId = (
  accountId: string,
  fromDate: Date | null,
  toDate: Date | null,
) => {
  const { groupId } = useGroup();

  const [{ data, fetching, error }] = useGetDailyByAccountIdQuery({
    variables: {
      groupId,
      accountId,
      fromDate,
      toDate,
    },
    pause: !accountId || !fromDate || !toDate || !groupId,
  });

  const incomeTotal = data?.dailies
    ?.filter((c) => (c.genre.iocomeType as IocomeType) === IocomeType.Income)
    .reduce((a, b) => a + Number(b.amount), 0);

  const outcomeTotal = data?.dailies
    ?.filter((c) => (c.genre.iocomeType as IocomeType) === IocomeType.Outcome)
    .reduce((a, b) => a + Number(b.amount), 0);

  const getDetail = (id: string): DailyDetail => {
    const dailyDetail = data?.dailies?.find((e) => e.id === id);

    return {
      id: dailyDetail?.id ?? null,
      date: new Date(dailyDetail?.date as string),
      amount: Number(dailyDetail?.amount) ?? "",
      iocomeType: (dailyDetail?.genre.iocomeType as IocomeType) ?? null,
      genreId: dailyDetail?.genre.id ?? null,
      categoryId: dailyDetail?.category.id ?? null,
      accountId: dailyDetail?.account.id ?? null,
      memo: dailyDetail?.memo ?? null,
    };
  };

  return { data, fetching, error, incomeTotal, outcomeTotal, getDetail };
};

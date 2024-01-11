/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGetDailyDetailByDateAccountIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useGroup } from "@hooks/group/useGroup";
import { DailyDetail } from "@domain/model/household/DailyDetail";

export const useGetDailyDetailByDateAccountId = (
  accountId: string,
  fromDate: Date | null,
  toDate: Date | null,
) => {
  const { groupId } = useGroup();

  const [{ data, fetching, error }] = useGetDailyDetailByDateAccountIdQuery({
    variables: {
      groupId,
      accountId,
      fromDate,
      toDate,
    },
  });

  const incomeTotal = data?.dailyDetailByDateList
    ?.filter(
      (c) =>
        c!.categoryByCategoryId!.genreByGenreId!.iocomeType ===
        IocomeType.Income,
    )
    .reduce((a, b) => a + Number(b!.amount!), 0);

  const outcomeTotal = data?.dailyDetailByDateList
    ?.filter(
      (c) =>
        c!.categoryByCategoryId!.genreByGenreId!.iocomeType ===
        IocomeType.Outcome,
    )
    .reduce((a, b) => a + Number(b!.amount!), 0);

  const getDetail = (id: string): DailyDetail => {
    const dailyDetail = data?.dailyDetailByDateList?.find((e) => e!.id === id);

    return {
      id: dailyDetail?.id ?? null,
      date: new Date(dailyDetail?.date),
      amount: Number(dailyDetail?.amount) ?? "",
      iocomeType:
        (dailyDetail?.categoryByCategoryId?.genreByGenreId
          ?.iocomeType as IocomeType) ?? null,
      genreId:
        dailyDetail?.categoryByCategoryId?.genreByGenreId?.genreId ?? null,
      categoryId: dailyDetail?.categoryByCategoryId?.categoryId ?? null,
      accountId: dailyDetail?.accountByAccountId?.accountId ?? null,
      memo: dailyDetail?.memo ?? null,
    };
  };

  return { data, fetching, error, incomeTotal, outcomeTotal, getDetail };
};

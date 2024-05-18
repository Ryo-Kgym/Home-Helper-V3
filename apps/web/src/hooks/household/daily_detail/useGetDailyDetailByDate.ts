/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { DailyDetail } from "@domain/model/household/DailyDetail";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useGroup } from "@hooks/group/useGroup";
import {
  useGetDailyDetailByDateQuery,
  useGetTransferCategoryByQuery,
} from "@v3/graphql/household";

export const useGetDailyDetailByDate = (fromDate: Date, toDate: Date) => {
  const { groupId } = useGroup();
  const [{ data, fetching, error }] = useGetDailyDetailByDateQuery({
    variables: {
      fromDate,
      toDate,
      groupId,
    },
  });

  const [{ data: tcData }] = useGetTransferCategoryByQuery({
    variables: {
      groupId,
    },
  });

  const incomeTotal = data?.dailies
    ?.filter((c) => (c.genre.iocomeType as IocomeType) === IocomeType.Income)
    .filter(
      (c) =>
        c.category.id != tcData?.transferCategory?.incomeCategory.categoryId,
    )
    .reduce((a, b) => a + Number(b.amount), 0);

  const outcomeTotal = data?.dailies
    ?.filter((c) => (c.genre.iocomeType as IocomeType) === IocomeType.Outcome)
    .filter(
      (c) =>
        c.category.id != tcData?.transferCategory?.outcomeCategory.categoryId,
    )
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

  return {
    data,
    fetching,
    error,
    incomeTotal,
    outcomeTotal,
    getDetail,
  };
};

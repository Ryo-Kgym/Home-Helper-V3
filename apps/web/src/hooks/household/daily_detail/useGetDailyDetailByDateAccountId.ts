/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGetDailyByAccountIdQuery } from "@v3/graphql/household";

import { DailyDetail } from "../../../domain/model/household/DailyDetail";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { useGroup } from "../../group/useGroup";

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

    if (!dailyDetail) {
      return {
        id: "",
        date: new Date(),
        amount: 0,
        iocomeType: IocomeType.Outcome,
        genreId: "",
        categoryId: "",
        accountId: "",
        memo: "",
      };
    }

    return {
      id: dailyDetail.id,
      date: new Date(dailyDetail.date),
      amount: Number(dailyDetail.amount) ?? "",
      iocomeType: dailyDetail.genre.iocomeType as IocomeType,
      genreId: dailyDetail.genre.id,
      categoryId: dailyDetail.category.id,
      accountId: dailyDetail.account.id,
      memo: dailyDetail.memo ?? "",
    };
  };

  return { data, fetching, error, incomeTotal, outcomeTotal, getDetail };
};

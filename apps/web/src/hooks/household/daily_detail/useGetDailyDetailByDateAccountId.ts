/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGetDailyByAccountIdQuery } from "@v3/graphql/household";

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

  return { data, fetching, error, incomeTotal, outcomeTotal };
};

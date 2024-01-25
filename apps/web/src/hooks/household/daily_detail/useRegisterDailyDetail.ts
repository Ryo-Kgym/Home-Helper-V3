/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { IocomeType } from "@domain/model/household/IocomeType";
import { useDate } from "@hooks/date/useDate";
import { useGroup } from "@hooks/group/useGroup";
import { useGenerateId } from "@hooks/useGenerateId";
import { useUser } from "@hooks/user/useUser";
import { useCreateDailyDetailMutation } from "@v3/graphql/household";

type DailyDetailForRegistration = {
  date: Date;
  genreId: string;
  iocomeType: IocomeType;
  categoryId: string;
  accountId: string;
  amount: number;
  memo?: string;
};

export const useRegisterDailyDetail = ({
  date,
  genreId,
  iocomeType,
  categoryId,
  accountId,
  amount,
  memo,
}: DailyDetailForRegistration) => {
  const { userId } = useUser();
  const { groupId } = useGroup();
  const { convertToFull } = useDate();
  const { generate } = useGenerateId();

  const [, dailyRegistrationMutation] = useCreateDailyDetailMutation();

  const variables = {
    accountId: accountId,
    amount: amount,
    categoryId: categoryId,
    genreId,
    iocomeType,
    date: convertToFull(date),
    groupId,
    id: generate(),
    memo: memo,
    userId,
  };

  const registerHandler = async () =>
    await dailyRegistrationMutation(variables);

  return {
    registerHandler,
  };
};

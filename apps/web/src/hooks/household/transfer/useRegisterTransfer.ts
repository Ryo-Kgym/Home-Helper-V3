/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { IocomeType } from "@domain/model/household/IocomeType";
import {
  useCreateDailyDetailMutation,
  useGetTransferCategoryByQuery,
} from "@/turbo/graphql/household";
import { useDate } from "@hooks/date/useDate";
import { useGroup } from "@hooks/group/useGroup";
import { useGenerateId } from "@hooks/useGenerateId";
import { useUser } from "@hooks/user/useUser";

export const useRegisterTransfer = ({
  date,
  sendAccountId,
  receiveAccountId,
  amount,
  memo,
}: {
  date: Date;
  sendAccountId: string;
  receiveAccountId: string;
  amount: number;
  memo?: string;
}) => {
  const { userId } = useUser();
  const { groupId } = useGroup();
  const { convertToFull } = useDate();
  const { generate } = useGenerateId();

  const [{ data }] = useGetTransferCategoryByQuery({
    variables: {
      groupId,
    },
  });
  const [, dailyRegistrationMutation] = useCreateDailyDetailMutation();

  const _registerDaily = async ({
    accountId,
    genreId,
    iocomeType,
    categoryId,
  }: {
    accountId: string;
    genreId: string;
    iocomeType: IocomeType;
    categoryId: string;
  }) =>
    dailyRegistrationMutation({
      accountId: accountId,
      amount: amount,
      genreId,
      iocomeType,
      categoryId,
      date: convertToFull(date),
      groupId,
      id: generate(),
      memo: memo,
      userId,
    });

  const registerTransfer = async () => {
    await _registerDaily({
      accountId: sendAccountId,
      genreId: data?.transferCategory?.outcomeCategory.genre.genreId ?? "",
      iocomeType: data?.transferCategory?.outcomeCategory.genre
        .iocomeType as IocomeType,
      categoryId: data?.transferCategory?.outcomeCategory.categoryId ?? "",
    });
    await _registerDaily({
      accountId: receiveAccountId,
      genreId: data?.transferCategory?.incomeCategory.genre.genreId ?? "",
      iocomeType: data?.transferCategory?.incomeCategory.genre
        .iocomeType as IocomeType,
      categoryId: data?.transferCategory?.incomeCategory.categoryId ?? "",
    });
  };

  return {
    registerTransfer,
  };
};

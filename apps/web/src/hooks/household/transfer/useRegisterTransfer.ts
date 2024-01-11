/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useUser } from "@hooks/user/useUser";
import { useGroup } from "@hooks/group/useGroup";
import { useDate } from "@hooks/date/useDate";
import { useGenerateId } from "@hooks/useGenerateId";
import {
  useCreateDailyDetailMutation,
  useGetTransferCategoryByQuery,
} from "@graphql/hasura/generated/hasuraGraphql";
import { IocomeType } from "@domain/model/household/IocomeType";

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
    try {
      await _registerDaily({
        accountId: sendAccountId,
        genreId: data?.transferCategory?.outcomeCategory.genre.genreId!,
        iocomeType: data?.transferCategory?.outcomeCategory.genre
          .iocomeType as IocomeType,
        categoryId: data?.transferCategory?.outcomeCategory.categoryId!,
      });
      await _registerDaily({
        accountId: receiveAccountId,
        genreId: data?.transferCategory?.incomeCategory.genre.genreId!,
        iocomeType: data?.transferCategory?.incomeCategory.genre
          .iocomeType as IocomeType,
        categoryId: data?.transferCategory?.incomeCategory.categoryId!,
      });
    } catch (e) {
      throw e;
    }
  };

  return {
    registerTransfer,
  };
};

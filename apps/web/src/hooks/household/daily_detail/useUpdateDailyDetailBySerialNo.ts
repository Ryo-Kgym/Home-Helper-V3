/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useUpdateDailyDetailByIdMutation } from "@graphql/hasura/generated/hasuraGraphql";
import { IocomeType } from "@domain/model/household/IocomeType";

type useUpdateDailyDetailBySerialNoArgs = {
  id: string;
  date: Date;
  genreId: string;
  iocomeType: IocomeType;
  categoryId: string;
  accountId: string;
  amount: number;
  memo: string | null;
};
export const useUpdateDailyDetailBySerialNo = ({
  id,
  date,
  genreId,
  iocomeType,
  categoryId,
  accountId,
  amount,
  memo,
}: useUpdateDailyDetailBySerialNoArgs) => {
  const [, updateMutation] = useUpdateDailyDetailByIdMutation();

  const updateHandler = async () =>
    await updateMutation({
      id,
      date,
      genreId,
      iocomeType,
      categoryId,
      accountId,
      amount,
      memo,
    });

  return {
    updateHandler,
  };
};

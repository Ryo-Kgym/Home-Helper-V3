import { useUpdateDailyDetailByIdMutation } from "@v3/graphql/household";

import type { IocomeType } from "~/types/iocome-type";

export const useEditDaily = () => {
  const [, editDailyMutation] = useUpdateDailyDetailByIdMutation();

  const editDaily = async ({
    id,
    date,
    genreId,
    iocomeType,
    categoryId,
    accountId,
    amount,
    memo,
  }: {
    id: string;
    date: Date;
    genreId: string;
    iocomeType: IocomeType;
    categoryId: string;
    accountId: string;
    amount: number;
    memo: string | null;
  }) => {
    const { error } = await editDailyMutation({
      id,
      date,
      iocomeType,
      genreId,
      categoryId,
      accountId,
      amount,
      memo,
      tagDetails: [], // FIXME 未実装
    });
    if (error) {
      throw error;
    }
  };

  return {
    editDaily,
  };
};

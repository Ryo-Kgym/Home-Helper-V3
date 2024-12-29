"use server";

import { GetDailyDetailByIdDocument } from "@v3/graphql/household/type";

import { DailyDetail } from "../../../domain/model/household/DailyDetail";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { execQuery } from "../../../persistence/database/server/execQuery";

export const getDailyDetail = async (params: {
  id: string;
}): Promise<DailyDetail> => {
  const { data } = await execQuery(GetDailyDetailByIdDocument, {
    id: params.id,
  });

  if (!data.daily) {
    throw new Error("Not found");
  }

  return {
    id: data.daily.id,
    date: new Date(data.daily.date),
    amount: data.daily.amount,
    iocomeType: data.daily.genre.iocomeType as IocomeType,
    genreId: data.daily.genre.id,
    categoryId: data.daily.category.id,
    accountId: data.daily.account.id,
    memo: data.daily.memo ?? "",
    tags: data.daily.tags.map((tag) => tag.tag.id),
  };
};

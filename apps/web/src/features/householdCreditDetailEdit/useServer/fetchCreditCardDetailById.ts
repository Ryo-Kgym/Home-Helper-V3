"use server";

import { GetCreditCardDetailByIdDocument } from "@v3/graphql/household/schema/query/v5/getCreditCardDetailById.generated";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { execQuery } from "../../../persistence/database/server/execQuery";

export const fetchCreditCardDetailById = async (id: string) => {
  const { data } = await execQuery(GetCreditCardDetailByIdDocument, {
    id,
  });

  const initData = {
    date: new Date(data?.creditCardDetail?.date as string),
    iocomeType:
      (data?.creditCardDetail?.genre?.iocomeType as IocomeType) ??
      IocomeType.Income,
    genreId: data?.creditCardDetail?.genre?.id ?? "",
    categoryId: data?.creditCardDetail?.category?.id ?? "",
    amount: Number(data?.creditCardDetail?.amount) ?? "",
    memo: data?.creditCardDetail?.memo ?? "",
    tags: data?.creditCardDetail?.tags.map((tag) => tag.tag.id) ?? [],
  };

  return {
    initData,
  };
};

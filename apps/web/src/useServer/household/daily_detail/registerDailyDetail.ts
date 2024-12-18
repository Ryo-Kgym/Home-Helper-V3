"use server";

import { CreateDailyDetailDocument } from "@v3/graphql/household/type";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { convertToFull } from "../../../function/date/convertToFull";
import { generateId } from "../../../function/generateId";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execMutation } from "../../../persistence/database/server/execMutation";

export const registerDailyDetail = async ({
  date,
  genreId,
  iocomeType,
  categoryId,
  accountId,
  amount,
  memo,
}: {
  date: Date;
  genreId: string;
  iocomeType: IocomeType;
  categoryId: string;
  accountId: string;
  amount: number;
  memo?: string;
}) => {
  const {
    id: userId,
    group: { id: groupId },
  } = await findUser();

  const { data, error } = await execMutation(CreateDailyDetailDocument, {
    id: generateId(),
    date: convertToFull(date),
    amount,
    accountId,
    genreId,
    iocomeType,
    categoryId,
    memo: memo,
    groupId,
    userId,
  });

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("Failed to register daily detail");
  }
};

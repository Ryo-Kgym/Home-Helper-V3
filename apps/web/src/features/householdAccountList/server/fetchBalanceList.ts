import {
  convertToAccounts,
  totalBalance,
} from "@v3/graphql/household/convert/parseToAccounts";
import { GetAccountBalanceListDocument } from "@v3/graphql/household/type";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";

export const fetchBalanceList = async ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const {
    group: { id: groupId },
  } = await findUser();

  const { data } = await execQuery(GetAccountBalanceListDocument, {
    fromDate,
    toDate,
    groupId,
  });

  if (!data) {
    throw new Error("Failed to fetch balance list");
  }

  const records = convertToAccounts(data);
  const total = totalBalance(data);

  return {
    records,
    total,
  };
};

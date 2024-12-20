"use server";

import { GetValidAccountsDocument } from "@v3/graphql/household/type";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { findAccountList } from "./findAccountList";

export const fetchAccountList = async () => {
  const cache = await findAccountList();

  if (cache) {
    return { accounts: cache };
  }

  const { group } = await findUser();
  const { data } = await execQuery(GetValidAccountsDocument, {
    groupId: group.id,
  });
  const accounts =
    data?.allAccountsList?.map((account) => ({
      label: account.accountName,
      value: account.accountId,
    })) ?? [];

  return { accounts };
};

"use server";

import { GetValidAccountsDocument } from "@v3/graphql/household/type";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";

export const fetchAccountList = async () => {
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

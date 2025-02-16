import type { YYYYmmDD } from "@/type/date/date";
import { GetAccountBalanceListDocument } from "@v3/graphql/household/schema/query/v5/getAccountBalanceList.generated";
import {
  convertToAccounts,
  totalBalance,
} from "features/householdAccountList/server/parseToAccounts";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";

export const fetchBalanceList = async ({
  fromDate,
  toDate,
}: {
  fromDate: YYYYmmDD;
  toDate: YYYYmmDD;
}) => {
  const {
    group: { id: groupId },
  } = await findUser();

  const { data } = await execQuery(GetAccountBalanceListDocument, {
    fromDate: fromDate.toString(),
    toDate: toDate.toString(),
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

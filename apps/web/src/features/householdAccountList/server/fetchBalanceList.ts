import {
  convertToAccounts,
  totalBalance,
} from "@v3/graphql/household/convert/parseToAccounts";
import { GetAccountBalanceListDocument } from "@v3/graphql/household/type";

import { findUser } from "../../../persistence/browser/server/find-user";
import { fetchQuery } from "../../../persistence/database/server/fetchQuery";

export const fetchBalanceList = async ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const { group } = await findUser();

  const { data } = await fetchQuery(GetAccountBalanceListDocument, {
    fromDate: fromDate,
    toDate: toDate,
    groupId: group.id,
  });

  const records = convertToAccounts(data);
  const total = totalBalance(data);

  return {
    records,
    total,
  };
};

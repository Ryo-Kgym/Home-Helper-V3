import { fetchBalanceList } from "@features/householdAccountList/server/fetchBalanceList";

import { AccountListClient } from "./AccountListClient";

export const AccountListServer = async ({
  fromDate = new Date("2019-01-01"),
  toDate = new Date(),
  accountId,
}: {
  fromDate: Date | undefined;
  toDate: Date | undefined;
  accountId: string | undefined;
}) => {
  const { records, total } = await fetchBalanceList({
    fromDate,
    toDate,
  });

  return (
    <AccountListClient
      balanceRecords={records}
      total={total}
      fromDate={fromDate}
      toDate={toDate}
      accountId={accountId}
    />
  );
};

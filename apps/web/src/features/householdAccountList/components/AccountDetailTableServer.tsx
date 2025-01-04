import { fetchAccountDetailList } from "../server/fetchAccountDetailList";
import { AccountDetailTable } from "./AccountDetailTable";

export const AccountDetailTableServer = async ({
  fromDate = new Date("2019-01-01"),
  toDate = new Date(),
  accountId,
}: {
  fromDate: Date | undefined;
  toDate: Date | undefined;
  accountId: string | undefined;
}) => {
  if (!accountId) {
    return null;
  }

  const { records, incomeTotal, outcomeTotal } = await fetchAccountDetailList({
    fromDate,
    toDate,
    accountId,
  });

  return (
    <AccountDetailTable
      records={records}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
  );
};

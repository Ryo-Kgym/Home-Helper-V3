import { fetchDailyBalanceRecords } from "../server/fetchDailyBalanceRecords";
import { AccountDailyTable } from "./AccountDailyTable";

export const AccountDailyServer = async ({
  fromDate = new Date("2019-01-01"),
  toDate = new Date(),
  accountId,
}: {
  fromDate: Date | undefined;
  toDate: Date | undefined;
  accountId: string | undefined;
}) => {
  if (!accountId) {
    return <div>アカウントを選択してください</div>;
  }

  const { records, incomeTotal, outcomeTotal } = await fetchDailyBalanceRecords(
    {
      accountId,
      fromDate,
      toDate,
    },
  );

  return (
    <AccountDailyTable
      records={records}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
  );
};

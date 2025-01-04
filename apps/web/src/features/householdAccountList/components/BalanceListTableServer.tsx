import { fetchBalanceList } from "../server/fetchBalanceList";
import { BalanceListTable } from "./BalanceListTable";

export const BalanceListTableServer = async ({
  fromDate = new Date("2019-01-01"),
  toDate = new Date(),
}: {
  fromDate: Date | undefined;
  toDate: Date | undefined;
}) => {
  const { records, total } = await fetchBalanceList({
    fromDate,
    toDate,
  });

  return (
    <BalanceListTable
      balanceRecords={records}
      total={total}
      fromDate={fromDate}
      toDate={toDate}
    />
  );
};

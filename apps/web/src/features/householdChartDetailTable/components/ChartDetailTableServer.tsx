import { fetchWatchTableData } from "../server/fetchWatchTableData";
import { ChartDetailTableClient } from "./ChartDetailTableClient";

export const ChartDetailTableServer = async ({
  watchFirstDate,
  dateType,
}: {
  watchFirstDate: Date | null;
  dateType: "withdrawalDate" | "settlementDate";
}) => {
  if (!watchFirstDate) {
    return <div>年月を選択してください</div>;
  }

  const { records } = await fetchWatchTableData({ watchFirstDate, dateType });

  return <ChartDetailTableClient records={records} />;
};

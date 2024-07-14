import { fetchWatchTableData } from "../server/fetchWatchTableData";
import { ChartDetailTablePageClient } from "./ChartDetailTablePageClient";

export const ChartDetailTablePageServer = async ({
  watchFirstDate,
}: {
  watchFirstDate: Date | null;
}) => {
  if (!watchFirstDate) {
    return <div>年月を選択してください</div>;
  }

  const { records } = await fetchWatchTableData({ watchFirstDate });

  return <ChartDetailTablePageClient records={records} />;
};

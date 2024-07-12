import { colors } from "@styles/colors";

import { fetchBalanceChartData } from "../server/fetchBalanceChartData";
import { BalanceChartPageClient } from "./BalanceChartPageClient";

export const BalanceChartPageServer = async ({
  fromDate,
  toDate,
}: {
  fromDate: Date | undefined;
  toDate: Date | undefined;
}) => {
  const { data } = await fetchBalanceChartData({
    fromDate: fromDate ?? getPast12MonthDate(),
    toDate: toDate ?? new Date(),
  });

  return (
    <BalanceChartPageClient
      chartParams={{
        settings: Object.fromEntries(
          Object.entries(colors.balance).map(([key, value]) => [
            key,
            { color: value },
          ]),
        ),
        data,
      }}
    />
  );
};

const getPast12MonthDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 12);
  return date;
};

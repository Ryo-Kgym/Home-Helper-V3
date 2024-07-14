import { fetchBalanceChartData } from "@features/householdBalanceChart/server/fetchBalanceChartData";
import { colors } from "@styles/colors";

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
        settings: barchartSetting,
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

const barchartSetting = {
  income: {
    color: colors.balance.income,
    group: "income",
  },
  outcome: {
    color: colors.balance.outcome,
    group: "outcome",
  },
  diff: {
    color: colors.balance.diff,
    group: "diff",
  },
  deposit: {
    color: colors.balance.deposit,
    group: "outcome",
  },
};

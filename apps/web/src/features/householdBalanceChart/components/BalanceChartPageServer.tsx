import { BalanceChartClient } from "@features/householdBalanceChart/components/BalanceChartClient";
import { fetchBalanceChartData } from "@features/householdBalanceChart/server/fetchBalanceChartData";
import { colors } from "@styles/colors";

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
    <BalanceChartClient
      barchartSetting={barchartSetting}
      areaChartSetting={areaChartSetting}
      data={data}
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
    label: "収入",
  },
  outcome: {
    color: colors.balance.outcome,
    group: "outcome",
    label: "支出",
  },
  deposit: {
    color: colors.balance.deposit,
    group: "outcome",
    label: "積立",
  },
  diff: {
    color: colors.balance.diff,
    group: "diff",
    label: "差",
  },
};

const areaChartSetting = {
  cumulativeAssets: {
    color: colors.cumulative.deposit,
    group: "area",
    label: "積立累積",
  },
  cumulativeCash: {
    color: colors.cumulative.cash,
    group: "area",
    label: "現金累積",
  },
};

import { PageSourceBalanceChartQuery } from "../type";

export const sumBalanceData = (data: PageSourceBalanceChartQuery) => {
  return data.detailView.reduce<
    Record<string, { income: number; outcome: number; diff: number }>
  >((sum, cur) => {
    const yearMonth = cur.withdrawalDate.slice(0, 7); // yyyy-mm
    if (!(yearMonth in sum)) {
      return {
        ...sum,
        [yearMonth]: {
          income: cur.iocomeType === "INCOME" ? cur.amount : 0,
          outcome: cur.iocomeType === "OUTCOME" ? cur.amount : 0,
          diff: cur.iocomeType === "INCOME" ? cur.amount : -cur.amount,
        },
      };
    }
    const thisYearMonth = sum[yearMonth]!;
    return {
      ...sum,
      [yearMonth]: {
        income:
          thisYearMonth.income + (cur.iocomeType === "INCOME" ? cur.amount : 0),
        outcome:
          thisYearMonth.outcome +
          (cur.iocomeType === "OUTCOME" ? cur.amount : 0),
        diff:
          thisYearMonth.diff +
          (cur.iocomeType === "INCOME" ? cur.amount : -cur.amount),
      },
    };
  }, {});
};

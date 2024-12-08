import { ChartDataQuery } from "@v3/graphql/household/type";

import { SumBalance } from "./types";

export const sumBalanceData = (data: ChartDataQuery): SumBalance => {
  return data.detailView?.reduce<SumBalance>((sum, cur) => {
    const yearMonth = cur.withdrawalDate.slice(0, 7); // yyyy-mm
    if (!(yearMonth in sum)) {
      return {
        ...sum,
        [yearMonth]: {
          income: isIncome(cur) ? cur.amount : 0,
          outcome: isOutcome(cur) ? cur.amount : 0,
          deposit: isDeposit(cur) ? cur.amount : 0,
          diff: cur.iocomeType === "INCOME" ? cur.amount : -cur.amount,
        },
      };
    }
    const thisYearMonth = sum[yearMonth]!;
    return {
      ...sum,
      [yearMonth]: {
        income: thisYearMonth.income + (isIncome(cur) ? cur.amount : 0),
        outcome: thisYearMonth.outcome + (isOutcome(cur) ? cur.amount : 0),
        deposit: thisYearMonth.deposit + (isDeposit(cur) ? cur.amount : 0),
        diff:
          thisYearMonth.diff +
          (cur.iocomeType === "INCOME" ? cur.amount : -cur.amount),
      },
    };
  }, {});
};

const isIncome = (cur: NonNullable<ChartDataQuery>["detailView"][number]) => {
  return cur.iocomeType === "INCOME";
};

const isOutcome = (cur: NonNullable<ChartDataQuery>["detailView"][number]) => {
  return cur.iocomeType === "OUTCOME" && !cur.category?.depositCategory;
};

const isDeposit = (cur: NonNullable<ChartDataQuery>["detailView"][number]) => {
  return cur.category?.depositCategory;
};

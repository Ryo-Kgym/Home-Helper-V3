import { ChartDataQuery } from "@v3/graphql/household/schema/query/v5/chartData.generated";

import { SumBalance } from "./types";

export const sumBalanceData = (data: ChartDataQuery): SumBalance => {
  return data.detailView?.reduce<SumBalance>((sum, cur) => {
    const yearMonth = cur.withdrawalDate?.slice(0, 7); // yyyy-mm
    const amount = cur.amount ?? 0;

    if (!yearMonth) {
      throw new Error("withdrawalDate is required");
    }

    if (!(yearMonth in sum)) {
      return {
        ...sum,
        [yearMonth]: {
          income: isIncome(cur) ? amount : 0,
          outcome: isOutcome(cur) ? amount : 0,
          deposit: isDeposit(cur) ? amount : 0,
          diff: cur.iocomeType === "INCOME" ? amount : -amount,
        },
      };
    }
    const thisYearMonth = sum[yearMonth]!;
    return {
      ...sum,
      [yearMonth]: {
        income: thisYearMonth.income + (isIncome(cur) ? amount : 0),
        outcome: thisYearMonth.outcome + (isOutcome(cur) ? amount : 0),
        deposit: thisYearMonth.deposit + (isDeposit(cur) ? amount : 0),
        diff:
          thisYearMonth.diff + (cur.iocomeType === "INCOME" ? amount : -amount),
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

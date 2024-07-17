import {
  SumBalance,
  SumBalanceAttributes,
} from "@features/householdBalanceChart/server/types";

export const cumulateSumBalance = (data: SumBalance) => {
  return Object.entries(data).reduce<
    Record<
      string,
      SumBalanceAttributes & { cumulative: number; assets: number }
    >
  >((acc, [yearMonth, value]) => {
    const prevCumulative = acc[Object.keys(acc).pop() ?? ""]?.cumulative ?? 0;
    const prevAssets = acc[Object.keys(acc).pop() ?? ""]?.assets ?? 0;
    return {
      ...acc,
      [yearMonth]: {
        ...value,
        cumulative: prevCumulative + value.diff,
        assets: prevAssets + value.deposit,
      },
    };
  }, {});
};

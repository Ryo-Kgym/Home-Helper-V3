import { SumBalance } from "@features/householdBalanceChart/server/types";

export const cumulateSumBalance = (data: SumBalance) => {
  return Object.entries(data).reduce<
    Record<string, { cumulative: number; assets: number }>
  >((acc, [key, value]) => {
    const prev = acc[Object.keys(acc).pop() ?? ""]?.cumulative ?? 0;
    const prevAssets = acc[Object.keys(acc).pop() ?? ""]?.assets ?? 0;
    return {
      ...acc,
      [key]: {
        ...value,
        cumulative: prev + value.diff,
        assets: prevAssets + value.deposit,
      },
    };
  }, {});
};

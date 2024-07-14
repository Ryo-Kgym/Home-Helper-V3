import { SumBalance } from "@features/householdBalanceChart/server/types";

export const cumulateSumBalance = (data: SumBalance) => {
  return Object.entries(data).reduce<Record<string, { cumulative: number }>>(
    (acc, [key, value]) => {
      const prev = acc[Object.keys(acc).pop() ?? ""]?.cumulative ?? 0;
      return {
        ...acc,
        [key]: {
          ...value,
          cumulative: prev + value.diff,
        },
      };
    },
    {},
  );
};

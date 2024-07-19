import { SumBalanceAttributes } from "./types";

export const filterSumBalance = <T extends SumBalanceAttributes>(
  data: Record<string, T>,
  fromDate: Date,
) => {
  return Object.fromEntries(
    Object.entries(data).filter(([date]) => new Date(date) >= fromDate),
  );
};

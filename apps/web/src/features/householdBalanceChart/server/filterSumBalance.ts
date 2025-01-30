import { YYYY_MM_DD } from "@/type/date/date";

import { SumBalanceAttributes } from "./types";

export const filterSumBalance = <T extends SumBalanceAttributes>(
  data: Record<string, T>,
  fromDate: YYYY_MM_DD,
) => {
  return Object.fromEntries(
    Object.entries(data).filter(([date]) => date >= fromDate),
  );
};

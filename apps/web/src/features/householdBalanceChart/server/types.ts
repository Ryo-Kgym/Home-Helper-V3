import { YYYY_MM_DD } from "@/type/date/date";

export type SumBalance = Record<YYYY_MM_DD, SumBalanceAttributes>;

export type SumBalanceAttributes = {
  income: number;
  outcome: number;
  deposit: number;
  diff: number;
};

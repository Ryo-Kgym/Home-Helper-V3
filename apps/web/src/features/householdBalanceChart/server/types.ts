import { YYYY_MM } from "@/type/date/date";

export type SumBalance = Record<YYYY_MM, SumBalanceAttributes>;

export type SumBalanceAttributes = {
  income: number;
  outcome: number;
  deposit: number;
  diff: number;
};

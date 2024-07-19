export type SumBalance = Record<string, SumBalanceAttributes>;

export type SumBalanceAttributes = {
  income: number;
  outcome: number;
  deposit: number;
  diff: number;
};

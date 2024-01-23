import type { DetailBase } from "~/hooks/household/detail/detail-base";

export const calcTotal = <T extends DetailBase>(data: T[]) => {
  const incomeTotal = data.reduce(
    (acc, cur) => (cur.iocomeType === "INCOME" ? acc + cur.amount : acc),
    0,
  );

  const outcomeTotal = data.reduce(
    (acc, cur) => (cur.iocomeType === "OUTCOME" ? acc + cur.amount : acc),
    0,
  );

  const balance = incomeTotal - outcomeTotal;

  return {
    incomeTotal,
    outcomeTotal,
    balance,
  };
};

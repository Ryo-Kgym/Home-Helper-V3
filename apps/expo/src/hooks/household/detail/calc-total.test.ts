import { describe, expect, it } from "@jest/globals";

import { calcTotal } from "./calc-total";

describe("calcTotal", () => {
  it("対象が空の場合は、合計0を返す。", () => {
    const actual = calcTotal([]);
    expect(actual).toEqual({
      incomeTotal: 0,
      outcomeTotal: 0,
      balance: 0,
    });
  });
  it("正常系", () => {
    const actual = calcTotal([
      {
        id: "1",
        amount: 100,
        iocomeType: "INCOME",
        category: "食費",
        memo: "メモ",
        date: "2021-01-01",
      },
      {
        id: "2",
        amount: 200,
        iocomeType: "OUTCOME",
        category: "食費",
        memo: "メモ",
        date: "2021-01-01",
      },
      {
        id: "3",
        amount: 300,
        iocomeType: "INCOME",
        category: "食費",
        memo: "メモ",
        date: "2021-01-01",
      },
      {
        id: "4",
        amount: 400,
        iocomeType: "OUTCOME",
        category: "食費",
        memo: "メモ",
        date: "2021-01-01",
      },
    ]);
    expect(actual).toEqual({
      incomeTotal: 400,
      outcomeTotal: 600,
      balance: -200,
    });
  });
});

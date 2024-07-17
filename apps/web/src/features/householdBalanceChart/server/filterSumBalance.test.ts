import { filterSumBalance } from "@features/householdBalanceChart/server/filterSumBalance";

describe("filterSumBalance", () => {
  test("期待通りに処理されること", () => {
    const params = {
      "2023-08-01": {
        income: 100,
        outcome: 50,
        deposit: 0,
        diff: 50,
      },
      "2023-08-02": {
        income: 50,
        outcome: 100,
        deposit: 0,
        diff: -50,
      },
      "2023-08-03": {
        income: 200,
        outcome: 50,
        deposit: 0,
        diff: 150,
      },
      "2023-09-01": {
        income: 100,
        outcome: 50,
        deposit: 0,
        diff: 50,
      },
      "2023-09-02": {
        income: 300,
        outcome: 50,
        deposit: 0,
        diff: 250,
      },
      "2023-09-03": {
        income: 150,
        outcome: 50,
        deposit: 150,
        diff: 100,
      },
    };

    const actual = filterSumBalance(params, new Date("2023-09-01"));

    expect(actual).toEqual({
      "2023-09-01": {
        income: 100,
        outcome: 50,
        deposit: 0,
        diff: 50,
      },
      "2023-09-02": {
        income: 300,
        outcome: 50,
        deposit: 0,
        diff: 250,
      },
      "2023-09-03": {
        income: 150,
        outcome: 50,
        deposit: 150,
        diff: 100,
      },
    });
  });
});

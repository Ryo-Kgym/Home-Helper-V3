import { cumulateSumBalance } from "./cumulateSumBalance";

describe("cumulateSumBalance", () => {
  test("期待した値が返ること", () => {
    const actual = cumulateSumBalance({
      "2021-01": {
        income: 100,
        outcome: 0,
        deposit: 20,
        diff: 100,
      },
      "2021-02": {
        income: 0,
        outcome: 50,
        deposit: 30,
        diff: -50,
      },
      "2021-03": {
        income: 0,
        outcome: 200,
        deposit: 30,
        diff: -200,
      },
    });

    expect(actual).toEqual({
      "2021-01": {
        income: 100,
        outcome: 0,
        deposit: 20,
        diff: 100,
        cumulativeCash: 100,
        cumulativeAssets: 20,
      },
      "2021-02": {
        income: 0,
        outcome: 50,
        deposit: 30,
        diff: -50,
        cumulativeCash: 50,
        cumulativeAssets: 50,
      },
      "2021-03": {
        income: 0,
        outcome: 200,
        deposit: 30,
        diff: -200,
        cumulativeCash: -150,
        cumulativeAssets: 80,
      },
    });
  });
});

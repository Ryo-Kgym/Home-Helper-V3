import { cumulateSumBalance } from "./cumulateSumBalance";

describe("cumulateSumBalance", () => {
  test("期待した値が返ること", () => {
    const actual = cumulateSumBalance({
      "2021-01": {
        income: 100,
        outcome: 0,
        deposit: 0,
        diff: 100,
      },
      "2021-02": {
        income: 0,
        outcome: 50,
        deposit: 0,
        diff: -50,
      },
      "2021-03": {
        income: 0,
        outcome: 200,
        deposit: 0,
        diff: -200,
      },
    });

    expect(actual).toEqual({
      "2021-01": {
        income: 100,
        outcome: 0,
        deposit: 0,
        diff: 100,
        cumulative: 100,
      },
      "2021-02": {
        income: 0,
        outcome: 50,
        deposit: 0,
        diff: -50,
        cumulative: 50,
      },
      "2021-03": {
        income: 0,
        outcome: 200,
        deposit: 0,
        diff: -200,
        cumulative: -150,
      },
    });
  });
});

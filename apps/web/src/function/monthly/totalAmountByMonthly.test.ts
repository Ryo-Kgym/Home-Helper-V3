// totalAmountByMonthly
// jest parameterized test

import {
  totalAmountByMonthly,
  TotalAmountByMonthlyArgs,
} from "./totalAmountByMonthly";

describe("totalAmountByMonthly", () => {
  test.each([
    {
      key: "key",
      list: [
        { month: "2023-01", amount: 100 },
        { month: "2023-02", amount: 200 },
        { month: "2023-03", amount: 300 },
        { month: "2023-04", amount: 400 },
        { month: "2023-05", amount: 500 },
        { month: "2023-08", amount: 800 },
        { month: "2023-09", amount: 900 },
        { month: "2023-10", amount: 1000 },
        { month: "2023-11", amount: 1100 },
        { month: "2023-02", amount: 200 },
        { month: "2023-03", amount: 300 },
        { month: "2023-04", amount: 400 },
        { month: "2023-05", amount: 500 },
        { month: "2023-06", amount: 600 },
        { month: "2023-08", amount: 800 },
        { month: "2023-09", amount: 900 },
        { month: "2023-10", amount: 1000 },
        { month: "2023-11", amount: 1100 },
      ],
      fromDate: new Date("2022-10-01"),
      toDate: new Date("2023-12-31"),
    },
  ])(
    "totalAmountByMonthly",
    ({ key, list, fromDate, toDate }: TotalAmountByMonthlyArgs<string>) => {
      const actual = totalAmountByMonthly({ key, list, fromDate, toDate });
      expect(actual).toEqual({
        key,
        monthlyTotal: [
          0, 0, 0, 100, 400, 600, 800, 1000, 600, 0, 1600, 1800, 2000, 2200, 0,
        ],
        total: 11100,
      });
    }
  );
});

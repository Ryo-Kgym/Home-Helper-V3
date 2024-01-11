/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { MonthlyDeposit } from "@hooks/household/deposit/monthlyDeposit";

import type { CategoryDetail } from "./type";
import { createMonthlyDeposits as testTarget } from "./create-monthly-deposits";

describe("createMonthlyDeposits", () => {
  it("should create monthly deposits based on category details and year months", () => {
    const mockCategoryDetails: CategoryDetail[] = [
      {
        categoryId: "1",
        categoryName: "Test Category",
        details: [
          {
            detailId: "1",
            type: "daily",
            date: new Date("2022-01-01"),
            amount: 1000,
            memo: "Test Memo",
          },
          {
            detailId: "2",
            type: "daily",
            date: new Date("2022-03-01"),
            amount: 2000,
            memo: "Test Memo",
          },
          {
            detailId: "3",
            type: "credit",
            date: new Date("2022-01-01"),
            amount: 1000,
            memo: "Test Memo",
          },
          {
            detailId: "4",
            type: "credit",
            date: new Date("2022-04-01"),
            amount: 2000,
            memo: "Test Memo",
          },
        ],
      },
    ];
    const mockYearMonths: string[] = ["2022-01", "2022-02", "2022-03"];
    const expected: MonthlyDeposit[] = [
      {
        categoryId: "1",
        categoryName: "Test Category",
        monthlyCategory: [
          {
            yearMonth: new Date("2022-01-01"),
            amount: 2000,
          },
          {
            yearMonth: new Date("2022-02-01"),
            amount: 0,
          },
          {
            yearMonth: new Date("2022-03-01"),
            amount: 2000,
          },
        ],
      },
    ];

    const actual = testTarget(mockCategoryDetails, mockYearMonths);

    expect(actual).toEqual(expected);
  });
});

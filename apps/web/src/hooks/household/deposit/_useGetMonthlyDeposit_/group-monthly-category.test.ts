/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { groupMonthlyCategory as testTarget } from "./group-monthly-category";
import { CategoryDetail } from "./type";
import { MonthlyCategory } from "@hooks/household/deposit/monthlyDeposit";

test("groupMonthlyCategory function should group category details by month", () => {
  const mockCategoryDetail: CategoryDetail = {
    categoryId: "1",
    categoryName: "Test Category",
    details: [
      {
        detailId: "1",
        type: "daily",
        date: new Date("2023-03-01"),
        amount: 120,
        memo: "Test Memo",
      },
      {
        detailId: "2",
        type: "daily",
        date: new Date("2023-03-02"),
        amount: 180,
        memo: "Test Memo",
      },
      {
        detailId: "3",
        type: "credit",
        date: new Date("2023-03-03"),
        amount: 300,
        memo: "Test Memo",
      },
      {
        detailId: "4",
        type: "credit",
        date: new Date("2023-04-04"),
        amount: 400,
        memo: "Test Memo",
      },
    ],
  };
  const result: MonthlyCategory = testTarget(mockCategoryDetail, "2023-03");
  expect(result).toStrictEqual({
    yearMonth: new Date("2023-03-01"),
    amount: 600,
  });
});

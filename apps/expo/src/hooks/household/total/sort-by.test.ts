import { describe, expect, it } from "@jest/globals";

import { sortBy } from "./sort-by";

describe("sortBy", () => {
  const details = [
    { categoryId: "3", categoryName: "Transport", amount: 300 },
    { categoryId: "1", categoryName: "Food", amount: 100 },
    { categoryId: "2", categoryName: "Drink", amount: 200 },
  ];

  it("金額で昇順に並び替える。", () => {
    const result = details.sort(sortBy.amount.asc);

    expect(result).toEqual([
      { categoryId: "1", categoryName: "Food", amount: 100 },
      { categoryId: "2", categoryName: "Drink", amount: 200 },
      { categoryId: "3", categoryName: "Transport", amount: 300 },
    ]);
  });

  it("金額で降順に並び替える。", () => {
    const result = details.sort(sortBy.amount.desc);

    expect(result).toEqual([
      { categoryId: "3", categoryName: "Transport", amount: 300 },
      { categoryId: "2", categoryName: "Drink", amount: 200 },
      { categoryId: "1", categoryName: "Food", amount: 100 },
    ]);
  });
});

import { describe, expect, it } from "@jest/globals";

import { totalCategory } from "./total-category";

describe("totalCategory", () => {
  it("should return total amount of each category", () => {
    const details = [
      { id: "1", categoryId: "1", categoryName: "Food", amount: 100 },
      { id: "2", categoryId: "2", categoryName: "Drink", amount: 200 },
      { id: "3", categoryId: "1", categoryName: "Food", amount: 300 },
      { id: "4", categoryId: "2", categoryName: "Drink", amount: 200 },
      { id: "5", categoryId: "3", categoryName: "Transport", amount: 400 },
    ];

    const result = totalCategory({ details });

    expect(result).toEqual([
      { categoryId: "1", categoryName: "Food", amount: 400 },
      { categoryId: "2", categoryName: "Drink", amount: 400 },
      { categoryId: "3", categoryName: "Transport", amount: 400 },
    ]);
  });
});

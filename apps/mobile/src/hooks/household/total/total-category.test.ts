import { totalCategory } from "./total-category";

describe("totalCategory", () => {
  it("filterを指定してない場合、全量を集計する。", () => {
    const details = [
      { type: "A", categoryId: "1", categoryName: "Food", amount: 100 },
      { type: "A", categoryId: "2", categoryName: "Drink", amount: 200 },
      { type: "B", categoryId: "1", categoryName: "Food", amount: 300 },
      { type: "B", categoryId: "2", categoryName: "Drink", amount: 200 },
      { type: "B", categoryId: "3", categoryName: "Transport", amount: 400 },
    ];

    const result = totalCategory({ details });

    expect(result).toEqual([
      { categoryId: "1", categoryName: "Food", amount: 400 },
      { categoryId: "2", categoryName: "Drink", amount: 400 },
      { categoryId: "3", categoryName: "Transport", amount: 400 },
    ]);
  });

  it("filterを指定すると、条件に合致するもののみ集計する。", () => {
    const details = [
      { type: "A", categoryId: "1", categoryName: "Food", amount: 100 },
      { type: "A", categoryId: "2", categoryName: "Drink", amount: 200 },
      { type: "B", categoryId: "1", categoryName: "Food", amount: 300 },
      { type: "B", categoryId: "2", categoryName: "Drink", amount: 200 },
      { type: "B", categoryId: "3", categoryName: "Transport", amount: 400 },
    ];

    const result = totalCategory({
      details,
      filter: (d) => d.type === "A",
    });

    expect(result).toEqual([
      { categoryId: "1", categoryName: "Food", amount: 100 },
      { categoryId: "2", categoryName: "Drink", amount: 200 },
    ]);
  });
});

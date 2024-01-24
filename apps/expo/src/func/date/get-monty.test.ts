import { describe, expect, it } from "@jest/globals";

import { getMonth } from "./get-month";

describe("getMonth", () => {
  it("月の開始日と終了日を返す。閏年でない", () => {
    const date = new Date("2023-12-05");
    const month = getMonth(date);
    expect(month).toEqual({
      firstDayOfMonth: new Date("2023-12-01"),
      lastDayOfMonth: new Date("2023-12-31"),
    });
  });

  it("月の開始日と終了日を返す。閏年", () => {
    const date = new Date("2024-02-05");
    const month = getMonth(date);
    expect(month).toEqual({
      firstDayOfMonth: new Date("2024-02-01"),
      lastDayOfMonth: new Date("2024-02-29"),
    });
  });

  it("引数がない場合は、今月の開始日と終了日を返す。", () => {
    const date = new Date();
    const month = getMonth();
    expect(month).toEqual({
      firstDayOfMonth: new Date(date.getFullYear(), date.getMonth(), 1, 9),
      lastDayOfMonth: new Date(date.getFullYear(), date.getMonth() + 1, 0, 9),
    });
  });
});

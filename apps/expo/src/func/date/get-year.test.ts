import { describe, expect, it } from "@jest/globals";

import { getYear } from "./get-year";

describe("getYear", () => {
  it("引数指定がある場合、当年のデータを返す。", () => {
    const year = getYear(new Date("2021-01-01"));
    expect(year).toEqual({
      year: 2021,
      firstDayOfYear: new Date("2021-01-01T00:00:00.000Z"),
      lastDayOfYear: new Date("2021-12-31T00:00:00.000Z"),
      lastYear: new Date("2020-01-01T00:00:00.000Z"),
    });
  });

  it("引数指定がない場合、当年のデータを返す。", () => {
    const year = getYear();
    expect(year).toEqual({
      year: new Date().getFullYear(),
      firstDayOfYear: new Date(
        `${new Date().getFullYear()}-01-01T00:00:00.000Z`,
      ),
      lastDayOfYear: new Date(
        `${new Date().getFullYear()}-12-31T00:00:00.000Z`,
      ),
      lastYear: new Date(`${new Date().getFullYear() - 1}-01-01T00:00:00.000Z`),
    });
  });
});

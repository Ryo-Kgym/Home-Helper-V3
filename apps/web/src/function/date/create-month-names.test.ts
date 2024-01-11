/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { createMonthNames } from "./create-month-names";

describe("createMonthNames", () => {
  it("should generate month names between two given dates", () => {
    const fromMonth = new Date("2021-01-01");
    const toMonth = new Date("2021-05-01");
    const expectedMonthNames = ["2021年01月", "02月", "03月", "04月", "05月"];

    const monthNames = createMonthNames(fromMonth, toMonth);

    expect(monthNames).toStrictEqual(expectedMonthNames);
  });

  it("should generate month names between two given dates which span multiple years", () => {
    const fromMonth = new Date("2021-11-01");
    const toMonth = new Date("2023-03-01");
    const expectedMonthNames = [
      "2021年11月",
      "12月",
      "2022年01月",
      "02月",
      "03月",
      "04月",
      "05月",
      "06月",
      "07月",
      "08月",
      "09月",
      "10月",
      "11月",
      "12月",
      "2023年01月",
      "02月",
      "03月",
    ];

    const monthNames = createMonthNames(fromMonth, toMonth);

    expect(monthNames).toStrictEqual(expectedMonthNames);
  });

  it("should return empty array if fromMonth is after toMonth", () => {
    const fromMonth = new Date("2021-05-01");
    const toMonth = new Date("2021-01-01");

    const monthNames = createMonthNames(fromMonth, toMonth);

    expect(monthNames).toStrictEqual([]);
  });
});

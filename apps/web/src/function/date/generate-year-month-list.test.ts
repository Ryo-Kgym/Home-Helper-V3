/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { generateYearMonthList as testTarget } from "./generate-year-month-list";
import { describe, it, expect } from "@jest/globals";

describe("generateYearMonthList function", () => {
  it("should generate correctly the list of year-months between two dates", () => {
    const fromDate = new Date("2021-02-12");
    const toDate = new Date("2021-04-12");
    const result = ["2021-02", "2021-03", "2021-04"];
    expect(testTarget(fromDate, toDate)).toEqual(result);
  });

  it("should generate correctly the list of year-months when fromDate is equal to toDate", () => {
    const fromDate = new Date("2021-02-02");
    const toDate = new Date("2021-02-28");
    const result = ["2021-02"];
    expect(testTarget(fromDate, toDate)).toEqual(result);
  });

  it("should generate correctly the list of year-months when transitioning to a new year", () => {
    const fromDate = new Date("2021-12-12");
    const toDate = new Date("2022-01-12");
    const result = ["2021-12", "2022-01"];
    expect(testTarget(fromDate, toDate)).toEqual(result);
  });

  it("should throw an error when fromDate is greater than toDate", () => {
    const fromDate = new Date("2021-12-12");
    const toDate = new Date("2021-01-12");
    expect(() => testTarget(fromDate, toDate)).toThrowError(
      "fromDate must be less than or equal to toDate",
    );
  });
});

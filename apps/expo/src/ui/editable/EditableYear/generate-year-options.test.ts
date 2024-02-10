import { describe, expect, it } from "@jest/globals";

import { generateYearOptions } from "./generate-year-options";

describe("generateYearOptions", () => {
  it("it should return years from -10 to 0", () => {
    const thisYear = new Date().getFullYear();
    const result = generateYearOptions({ min: -10, max: 0 });
    expect(result).toEqual([
      { label: `${thisYear - 10}年`, value: -10 },
      { label: `${thisYear - 9}年`, value: -9 },
      { label: `${thisYear - 8}年`, value: -8 },
      { label: `${thisYear - 7}年`, value: -7 },
      { label: `${thisYear - 6}年`, value: -6 },
      { label: `${thisYear - 5}年`, value: -5 },
      { label: `${thisYear - 4}年`, value: -4 },
      { label: `${thisYear - 3}年`, value: -3 },
      { label: `${thisYear - 2}年`, value: -2 },
      { label: `${thisYear - 1}年`, value: -1 },
      { label: `${thisYear}年`, value: 0 },
    ]);
  });
});

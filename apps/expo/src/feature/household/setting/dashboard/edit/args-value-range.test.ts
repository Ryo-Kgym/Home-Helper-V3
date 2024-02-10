import { describe, expect, it } from "@jest/globals";

import { generateMonthOptions } from "./args-value-range";

describe("generateMonthOptions", () => {
  it("it should return months from -24 to 2", () => {
    const result = generateMonthOptions();
    expect(result).toEqual([
      { label: "24ヶ月前", value: -24 },
      { label: "23ヶ月前", value: -23 },
      { label: "22ヶ月前", value: -22 },
      { label: "21ヶ月前", value: -21 },
      { label: "20ヶ月前", value: -20 },
      { label: "19ヶ月前", value: -19 },
      { label: "18ヶ月前", value: -18 },
      { label: "17ヶ月前", value: -17 },
      { label: "16ヶ月前", value: -16 },
      { label: "15ヶ月前", value: -15 },
      { label: "14ヶ月前", value: -14 },
      { label: "13ヶ月前", value: -13 },
      { label: "12ヶ月前", value: -12 },
      { label: "11ヶ月前", value: -11 },
      { label: "10ヶ月前", value: -10 },
      { label: "9ヶ月前", value: -9 },
      { label: "8ヶ月前", value: -8 },
      { label: "7ヶ月前", value: -7 },
      { label: "6ヶ月前", value: -6 },
      { label: "5ヶ月前", value: -5 },
      { label: "4ヶ月前", value: -4 },
      { label: "3ヶ月前", value: -3 },
      { label: "2ヶ月前", value: -2 },
      { label: "1ヶ月前", value: -1 },
      { label: "今月", value: 0 },
      { label: "1ヶ月後", value: 1 },
      { label: "2ヶ月後", value: 2 },
    ]);
  });
});

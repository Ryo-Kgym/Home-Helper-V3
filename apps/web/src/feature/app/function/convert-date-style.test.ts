import { convertDateStyle } from "@feature/app/function/convert-date-style";

describe("convertDateStyle", () => {
  it.each`
    format                   | locale     | timeZone | expected
    ${"YYYY-MM-DD"}          | ${"ja-JP"} | ${"JST"} | ${"2022/02/03"}
    ${"YYYY-MM-DD HH:mm:ss"} | ${"ja-JP"} | ${"JST"} | ${"2022年2月3日木曜日"}
    ${"YYYY_M_D_W__jpchar"}  | ${"ja-JP"} | ${"JST"} | ${"2022年2月3日木曜日"}
  `(
    "value=$value, format=$format, locale=$locale, timeZone=$timeZone のとき, $expected を返す",
    ({ format, locale, timeZone, expected }) => {
      const date = "2022-02-02T15:00:00.000Z";
      expect(convertDateStyle(date, format, locale, timeZone)).toBe(expected);
    },
  );

  it("value が空文字のとき, 空文字を返す", () => {
    const date = "";
    expect(convertDateStyle(date, "YYYY-MM-DD", "ja-JP", "JST")).toBe("");
  });
});

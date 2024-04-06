import { convertDateStyle } from "@feature/app/function/convert-date-style";

describe("convertDateStyle", () => {
  const date = "2022-02-02T15:00:00.000Z";

  test.each`
    format                   | locale     | timeZone | expected
    ${"YYYY-MM-DD"}          | ${"ja-JP"} | ${"JST"} | ${"2022/02/03"}
    ${"YYYY-MM-DD HH:mm:ss"} | ${"ja-JP"} | ${"JST"} | ${"2022年2月3日木曜日"}
  `(
    "value=$value, format=$format, locale=$locale, timeZone=$timeZone のとき, $expected を返す",
    ({ format, locale, timeZone, expected }) => {
      expect(convertDateStyle(date, format, locale, timeZone)).toBe(expected);
    },
  );
});

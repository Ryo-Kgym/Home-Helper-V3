import { convertValueDate } from "@feature/app/recordImport/convertRecords/convertValueDate";

describe("convertValueDate", () => {
  it.each`
    originalValue                       | expectedValue
    ${"2021年01月02日 12時34分56秒789"} | ${"2021-01-02T12:34:56.789Z"}
    ${"2021年01月02日 12時34分56秒"}    | ${"2021-01-02T12:34:56.000Z"}
    ${"2021年01月02日"}                 | ${"2021-01-02T00:00:00.000Z"}
    ${"2021年1月2日"}                   | ${"2021-01-02T00:00:00.000Z"}
    ${"2021/01/02 12:34:56.789"}        | ${"2021-01-02T12:34:56.789Z"}
    ${"2021/01/02 12:34:56"}            | ${"2021-01-02T12:34:56.000Z"}
    ${"2021/01/02"}                     | ${"2021-01-02T00:00:00.000Z"}
    ${"2021/1/2 12:34:56.789"}          | ${"2021-01-02T12:34:56.789Z"}
    ${"2021/1/2 12:34:56"}              | ${"2021-01-02T12:34:56.000Z"}
    ${"2021/1/2"}                       | ${"2021-01-02T00:00:00.000Z"}
    ${"2021-01-02T12:34:56.789Z"}       | ${"2021-01-02T12:34:56.789Z"}
    ${"2021-01-02 12:34:56.789"}        | ${"2021-01-02T12:34:56.789Z"}
    ${"2021-01-02 12:34:56"}            | ${"2021-01-02T12:34:56.000Z"}
    ${"2021-01-02"}                     | ${"2021-01-02T00:00:00.000Z"}
  `(
    "変換可能：$originalValue => $expectedValue",
    ({ originalValue, expectedValue }) => {
      const actual = convertValueDate(originalValue);

      expect(actual).toEqual({
        originalValue,
        value: expectedValue,
        errorMessage: undefined,
      });
    },
  );

  it.each`
    originalValue
    ${"2021-01-02T12:34:56"}
    ${"2021/01/02T12:34:56.789Z"}
    ${"2021/01/02T12:34:56Z"}
    ${"2021-1-2 12:34:56.789"}
    ${"2021-1-2 12:34:56"}
    ${"2021-1-2"}
  `("変換不可：$originalValue", ({ originalValue }) => {
    const actual = convertValueDate(originalValue);

    expect(actual).toEqual({
      originalValue,
      value: undefined,
      errorMessage: `日付の形式が正しくありません: ${originalValue}`,
    });
  });
});

import { convertValueSelectBox } from "@feature/record/import/convert-records/convert-value-selectbox";

import type { FieldOptionsSelectBox } from "@feature/app/schema";

describe("convertValueSelectBox", () => {
  const options: FieldOptionsSelectBox = {
    selector: [
      { label: "label1", value: "value1" },
      { label: "label2", value: "value2" },
    ],
  };

  it("オプションに想定した値を持っているとき、変換した値を返す。", () => {
    const result = convertValueSelectBox("label1", options);
    expect(result).toEqual({
      originalValue: "label1",
      value: "value1",
      errorMessage: undefined,
    });
  });

  it("オプションに想定した値を持っていないとき、エラーメッセージを返す。", () => {
    const result = convertValueSelectBox("label3", options);
    expect(result).toEqual({
      originalValue: "label3",
      value: "label3",
      errorMessage: "選択肢が見つかりません",
    });
  });
});

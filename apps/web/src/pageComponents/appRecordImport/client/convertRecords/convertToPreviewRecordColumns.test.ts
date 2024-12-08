import { Fields } from "@oneforall/domain/schema/appSchema";
import { PreviewRecordColumns } from "@oneforall/domain/schema/previewRecordsSchema";

import { convertToPreviewRecordColumns } from "./convertToPreviewRecordColumns";

describe("convertToPreviewRecordColumns", () => {
  const testFields: Fields = {
    f1: {
      id: "f1",
      fieldName: "フィールド1",
      fieldKind: "text",
      fieldIndex: 0,
      options: {},
    },
    f2: {
      id: "f2",
      fieldName: "フィールド2",
      fieldKind: "selectBox",
      fieldIndex: 1,
      options: {
        selector: [
          { value: "value1", label: "label1" },
          {
            value: "value2",
            label: "label2",
          },
        ],
      },
    },
    f3: {
      id: "f3",
      fieldName: "フィールド3",
      fieldKind: "text",
      fieldIndex: 2,
      options: {},
    },
  };

  it("行の列全てに対応する fieldMapping が存在する場合", () => {
    const actual = convertToPreviewRecordColumns(
      ["label1", "label2", "label3"],
      testFields,
      {
        f1: {
          fieldName: "フィールド1",
          fileColumnIndex: 0,
        },
        f2: {
          fieldName: "フィールド2",
          fileColumnIndex: 1,
        },
        f3: {
          fieldName: "フィールド3",
          fileColumnIndex: 2,
        },
      },
    );

    expect(actual).toStrictEqual<PreviewRecordColumns>({
      f1: {
        errorMessage: undefined,
        fieldKind: "text",
        originalValue: "label1",
        value: "label1",
      },
      f2: {
        errorMessage: undefined,
        fieldKind: "selectBox",
        originalValue: "label2",
        value: "value2",
      },
      f3: {
        errorMessage: undefined,
        fieldKind: "text",
        originalValue: "label3",
        value: "label3",
      },
    });
  });

  it("行の列に対応する fieldMapping が存在する場合", () => {
    const actual = convertToPreviewRecordColumns(
      ["label1", "label2", "label3"],
      testFields,
      {
        f1: {
          fieldName: "フィールド1",
          fileColumnIndex: 0,
        },
        f2: {
          fieldName: "フィールド2",
          fileColumnIndex: null,
        },
        f3: {
          fieldName: "フィールド3",
          fileColumnIndex: 2,
        },
      },
    );

    expect(actual).toStrictEqual<PreviewRecordColumns>({
      f1: {
        errorMessage: undefined,
        fieldKind: "text",
        originalValue: "label1",
        value: "label1",
      },
      f2: {
        errorMessage: undefined,
        fieldKind: "selectBox",
        originalValue: "",
        value: "",
      },
      f3: {
        errorMessage: undefined,
        fieldKind: "text",
        originalValue: "label3",
        value: "label3",
      },
    });
  });

  it("行の全ての列に対応する fieldMapping が存在しない場合", () => {
    const actual = convertToPreviewRecordColumns(
      ["label1", "label2", "label3"],
      testFields,
      {},
    );

    expect(actual).toStrictEqual<PreviewRecordColumns>({
      f1: {
        errorMessage: undefined,
        fieldKind: "text",
        originalValue: "",
        value: "",
      },
      f2: {
        errorMessage: undefined,
        fieldKind: "selectBox",
        originalValue: "",
        value: "",
      },
      f3: {
        errorMessage: undefined,
        fieldKind: "text",
        originalValue: "",
        value: "",
      },
    });
  });

  // 存在しない列番号が指定された場合
  it("行の列に対応する fieldMapping が存在するが、列番号が存在しない場合", () => {
    expect(() => {
      convertToPreviewRecordColumns(
        ["label1", "label2", "label3"],
        testFields,
        {
          f1: {
            fieldName: "フィールド1",
            fileColumnIndex: 0,
          },
          f2: {
            fieldName: "フィールド2",
            fileColumnIndex: 1,
          },
          f3: {
            fieldName: "フィールド3",
            fileColumnIndex: 10,
          },
        },
      );
    }).toThrowError(
      `取り込んだファイルに存在しない列番号です。フィールド名：フィールド3、誤った列番号：10`,
    );
  });
});

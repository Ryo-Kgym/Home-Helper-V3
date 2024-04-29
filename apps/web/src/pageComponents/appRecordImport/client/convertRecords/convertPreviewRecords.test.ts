import { PreviewRecords } from "@oneforall/domain/schema/previewRecordsSchema";

import { convertPreviewRecords } from "./convertPreviewRecords";
import * as switchValueConverterMock from "./switchValueConverter";

describe("convertRecords", () => {
  it("期待通り値を変換できること", () => {
    const actual = convertPreviewRecords(
      [
        ["カラム11", "カラム12", "カラム13"],
        ["カラム21", "カラム22", "カラム23"],
        ["カラム31", "カラム32", "カラム33"],
      ],
      {
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
              { value: "aaa", label: "カラム12" },
              { value: "bbb", label: "カラム22" },
            ],
          },
        },
        f3: {
          id: "f3",
          fieldName: "フィールド3",
          fieldKind: "lookup",
          fieldIndex: 2,
          options: {
            appId: "lookUpAppId",
            selectFieldId: "lookUpFieldId",
            saveFieldId: "lookUpSaveFieldId",
            sortFieldId: "lookUpSortFieldId",
            sortDirection: "asc",
          },
        },
      },
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

    expect(actual).toEqual<PreviewRecords>({
      "0": {
        recordId: "0",
        isEditing: false,
        columns: {
          f1: {
            errorMessage: undefined,
            fieldKind: "text",
            originalValue: "カラム11",
            value: "カラム11",
          },
          f2: {
            errorMessage: undefined,
            fieldKind: "selectBox",
            originalValue: "",
            value: "",
          },
          f3: {
            errorMessage: undefined,
            fieldKind: "lookup",
            originalValue: "カラム13",
            value: "カラム13",
          },
        },
      },
      "1": {
        recordId: "1",
        isEditing: false,
        columns: {
          f1: {
            errorMessage: undefined,
            fieldKind: "text",
            originalValue: "カラム21",
            value: "カラム21",
          },
          f2: {
            errorMessage: undefined,
            fieldKind: "selectBox",
            originalValue: "",
            value: "",
          },
          f3: {
            errorMessage: undefined,
            fieldKind: "lookup",
            originalValue: "カラム23",
            value: "カラム23",
          },
        },
      },
      "2": {
        recordId: "2",
        isEditing: false,
        columns: {
          f1: {
            errorMessage: undefined,
            fieldKind: "text",
            originalValue: "カラム31",
            value: "カラム31",
          },
          f2: {
            errorMessage: undefined,
            fieldKind: "selectBox",
            originalValue: "",
            value: "",
          },
          f3: {
            errorMessage: undefined,
            fieldKind: "lookup",
            originalValue: "カラム33",
            value: "カラム33",
          },
        },
      },
    });
  });

  it("内部の関数が期待した引数、実行されること", () => {
    const switchValueConverterVerify = jest.fn();
    jest
      .spyOn(switchValueConverterMock, "switchValueConverter")
      .mockImplementation(switchValueConverterVerify);

    convertPreviewRecords(
      [
        ["カラム11", "カラム12"],
        ["カラム21", "カラム22"],
      ],
      {
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
              { value: "aaa", label: "カラム12" },
              { value: "bbb", label: "カラム22" },
            ],
          },
        },
      },
      {
        f1: {
          fieldName: "フィールド1",
          fileColumnIndex: 0,
        },
        f2: {
          fieldName: "フィールド2",
          fileColumnIndex: 1,
        },
      },
    );

    [
      [
        "カラム11",
        {
          id: "f1",
          fieldName: "フィールド1",
          fieldKind: "text",
          fieldIndex: 0,
          options: {},
        },
      ],
      [
        "カラム12",
        {
          id: "f2",
          fieldName: "フィールド2",
          fieldKind: "selectBox",
          fieldIndex: 1,
          options: {
            selector: [
              { value: "aaa", label: "カラム12" },
              { value: "bbb", label: "カラム22" },
            ],
          },
        },
      ],
      [
        "カラム21",
        {
          id: "f1",
          fieldName: "フィールド1",
          fieldKind: "text",
          fieldIndex: 0,
          options: {},
        },
      ],
      [
        "カラム22",
        {
          id: "f2",
          fieldName: "フィールド2",
          fieldKind: "selectBox",
          fieldIndex: 1,
          options: {
            selector: [
              { value: "aaa", label: "カラム12" },
              { value: "bbb", label: "カラム22" },
            ],
          },
        },
      ],
    ].forEach((args, index) => {
      expect(switchValueConverterVerify.mock.calls[index]).toEqual(args);
    });
  });
});

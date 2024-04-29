import { Fields, PreviewRecordColumn } from "@oneforall/domain/schema";
import { convertToPreviewRecordColumns } from "@pages/appRecordImport/client/convertRecords/convertToPreviewRecordColumns";

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
      fieldKind: "text",
      fieldIndex: 1,
      options: {},
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
        0: {
          id: "f1",
          fieldName: "test1",
          fieldKind: "text",
          fieldIndex: 0,
          options: {},
        },
        1: {
          id: "f2",
          fieldName: "test2",
          fieldKind: "selectBox",
          fieldIndex: 1,
          options: {
            selector: [
              {
                value: "value1",
                label: "label1",
              },
              {
                value: "value2",
                label: "label2",
              },
            ],
          },
        },
        2: {
          id: "f3",
          fieldName: "test3",
          fieldKind: "text",
          fieldIndex: 2,
          options: {},
        },
      },
    );

    expect(actual).toStrictEqual<PreviewRecordColumn>({
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
        0: {
          id: "f1",
          fieldName: "test1",
          fieldKind: "text",
          fieldIndex: 0,
          options: {},
        },
        2: {
          id: "f3",
          fieldName: "test3",
          fieldKind: "text",
          fieldIndex: 2,
          options: {},
        },
      },
    );

    expect(actual).toStrictEqual<PreviewRecordColumn>({
      f1: {
        errorMessage: undefined,
        fieldKind: "text",
        originalValue: "label1",
        value: "label1",
      },
      f2: {
        errorMessage: undefined,
        fieldKind: "text",
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

    expect(actual).toStrictEqual<PreviewRecordColumn>({
      f1: {
        errorMessage: undefined,
        fieldKind: "text",
        originalValue: "",
        value: "",
      },
      f2: {
        errorMessage: undefined,
        fieldKind: "text",
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
});

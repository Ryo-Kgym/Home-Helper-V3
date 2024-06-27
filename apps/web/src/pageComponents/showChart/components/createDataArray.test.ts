import { Records } from "@oneforall/domain/schema/recordSchema";
import { SummaryCriteria } from "@oneforall/domain/schema/summary/sumRecordsSchema";
import { createDataArray } from "@pageComponents/showChart/components/createDataArray";

describe("createDataArray", () => {
  it("", () => {
    const criteria: SummaryCriteria = {
      groupingFields: {
        "1718289203212": {
          id: "1718289203212",
          fieldName: "値",
          fieldKind: "text",
          fieldIndex: 1,
          options: {},
        },
      },
      summaryFields: {
        "1718289203213": {
          id: "1718289203213",
          fieldName: "数値",
          fieldKind: "numeric",
          fieldIndex: 2,
          options: {
            thousandsSeparatorPosition: 3,
          },
        },
      },
    };

    const records: Records = {
      1: {
        recordId: "1718289218434",
        isEditing: false,
        columns: {
          1718289203212: {
            fieldKind: "text",
            value: "あああ",
          },
          1718289203213: {
            fieldKind: "numeric",
            value: "100",
          },
        },
      },
      2: {
        recordId: "1718289227545",
        isEditing: false,
        columns: {
          1718289203212: {
            fieldKind: "text",
            value: "あああ",
          },
          1718289203213: {
            fieldKind: "numeric",
            value: "200",
          },
        },
      },
      3: {
        recordId: "1718289236639",
        isEditing: false,
        columns: {
          1718289203212: {
            fieldKind: "text",
            value: "いいい",
          },
          1718289203213: {
            fieldKind: "numeric",
            value: "200",
          },
        },
      },
      4: {
        recordId: "1718895572486",
        isEditing: false,
        columns: {
          1718289203212: {
            fieldKind: "text",
            value: "ううう",
          },
          1718289203213: {
            fieldKind: "numeric",
            value: "500",
          },
        },
      },
    };

    expect(createDataArray({ records, criteria })).toEqual([
      {
        name: "あああ",
        value: 300,
      },
      {
        name: "いいい",
        value: 200,
      },
      {
        name: "ううう",
        value: 500,
      },
    ]);
  });
});

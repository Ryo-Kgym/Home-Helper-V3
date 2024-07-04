import { Records } from "@oneforall/domain/schema/recordSchema";
import { SummaryCriteria } from "@oneforall/domain/schema/summary/sumRecordsSchema";
import { createDataArray } from "@pageComponents/showChart/components/createDataArray";

describe("createDataArray", () => {
  it("", () => {
    const criteria: SummaryCriteria = {
      groupingFields: {
        f1: {
          id: "f1",
          fieldName: "値",
          fieldKind: "text",
          fieldIndex: 1,
          options: {},
        },
      },
      summaryFields: {
        f2: {
          id: "f2",
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
      r1: {
        recordId: "1718289218434",
        isEditing: false,
        columns: {
          f1: {
            fieldKind: "text",
            value: "あああ",
          },
          f2: {
            fieldKind: "numeric",
            value: "100",
          },
        },
      },
      r2: {
        recordId: "1718289227545",
        isEditing: false,
        columns: {
          f1: {
            fieldKind: "text",
            value: "あああ",
          },
          f2: {
            fieldKind: "numeric",
            value: "200",
          },
        },
      },
      r3: {
        recordId: "1718289236639",
        isEditing: false,
        columns: {
          f1: {
            fieldKind: "text",
            value: "いいい",
          },
          f2: {
            fieldKind: "numeric",
            value: "200",
          },
        },
      },
      r4: {
        recordId: "1718895572486",
        isEditing: false,
        columns: {
          f1: {
            fieldKind: "text",
            value: "ううう",
          },
          f2: {
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

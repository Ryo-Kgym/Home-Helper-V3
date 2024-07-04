import { Records } from "../../schema/recordSchema";
import {
  SummaryCriteria,
  SumRecords,
} from "../../schema/summary/sumRecordsSchema";
import { sumRecords } from "./sumRecords";

describe("sumRecords", () => {
  it("", () => {
    const records: Records = {
      r1: {
        recordId: "r1",
        isEditing: false,
        columns: {
          c1: {
            value: "grouping1",
            fieldKind: "text",
          },
          c2: {
            value: "100",
            fieldKind: "numeric",
          },
          c3: {
            value: "r1c3",
            fieldKind: "text",
          },
        },
      },
      r2: {
        recordId: "r2",
        isEditing: false,
        columns: {
          c1: {
            value: "grouping1",
            fieldKind: "text",
          },
          c2: {
            value: "200",
            fieldKind: "numeric",
          },
          c3: {
            value: "r2c3",
            fieldKind: "text",
          },
        },
      },
      r3: {
        recordId: "r3",
        isEditing: false,
        columns: {
          c1: {
            value: "grouping2",
            fieldKind: "text",
          },
          c2: {
            value: "300",
            fieldKind: "numeric",
          },
          c3: {
            value: "r3c3",
            fieldKind: "text",
          },
        },
      },
    };

    const criteria: SummaryCriteria = {
      groupingFields: {
        c1: {
          id: "c1",
          fieldName: "c1",
          fieldKind: "text",
          fieldIndex: 1,
          options: {},
        },
      },
      summaryFields: {
        c2: {
          id: "c2",
          fieldName: "c2",
          fieldKind: "numeric",
          fieldIndex: 2,
          options: {
            thousandsSeparatorPosition: 3,
          },
        },
      },
    };

    expect(sumRecords(records, criteria)).toEqual<SumRecords>({
      0: {
        columns: {
          c1: {
            value: "grouping1",
            fieldKind: "text",
          },
          c2: {
            value: "300",
            fieldKind: "numeric",
          },
        },
        sum: 300,
        average: 150,
        count: 2,
      },
      1: {
        columns: {
          c1: {
            value: "grouping2",
            fieldKind: "text",
          },
          c2: {
            value: "300",
            fieldKind: "numeric",
          },
        },
        sum: 300,
        average: 300,
        count: 1,
      },
    });
  });
});

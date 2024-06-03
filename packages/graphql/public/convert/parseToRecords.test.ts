import { Records } from "@oneforall/domain/schema/recordSchema";

import { parseToRecords } from "./parseToRecords";

describe("convertToRecords", () => {
  it("converts record data to a record list", () => {
    const recordData = [
      {
        __typename: "Record",
        id: "11111",
        index: 1,
        columns: {
          0: {
            fieldId: 0,
            fieldKind: "text",
            value: "Record 1",
            editing: false,
          },
          1: {
            fieldId: 1,
            fieldKind: "text",
            value: "Record 2",
            editing: false,
          },
        },
      },
      {
        __typename: "Record",
        id: "22222",
        index: 2,
        columns: {
          0: {
            fieldKind: "text",
            value: "Record 1",
          },
          1: {
            fieldKind: "text",
            value: "Record 2",
          },
        },
      },
    ];
    const records = parseToRecords(recordData);
    expect(records).toEqual<Records>({
      "1": {
        recordId: "11111",
        isEditing: false,
        columns: {
          0: {
            fieldKind: "text",
            value: "Record 1",
          },
          1: {
            fieldKind: "text",
            value: "Record 2",
          },
        },
      },
      "2": {
        recordId: "22222",
        isEditing: false,
        columns: {
          0: {
            fieldKind: "text",
            value: "Record 1",
          },
          1: {
            fieldKind: "text",
            value: "Record 2",
          },
        },
      },
    });
  });
});

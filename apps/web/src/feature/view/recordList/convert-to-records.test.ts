import type { GetViewQuery } from "@v3/graphql/public";

import { convertToRecords } from "./convert-to-records";

describe("convertToRecords", () => {
  it("converts record data to a record list", () => {
    const recordData: NonNullable<GetViewQuery["view"]>["records"] = [
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
    const records = convertToRecords(recordData);
    expect(records).toEqual({
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

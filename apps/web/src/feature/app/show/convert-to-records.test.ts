import type { Records } from "@feature/app/schema/record-schema";
import type { GetRecordsQuery } from "@v3/graphql/public/type";

import { convertToRecords } from "./convert-to-records";

describe("convertToRecords", () => {
  it("converts record data to a record list", () => {
    const recordData: GetRecordsQuery = {
      records: [
        {
          __typename: "Record",
          id: "record-1",
          index: 1,
          columns: JSON.stringify({
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
          }),
        },
        {
          __typename: "Record",
          id: "record-2",
          index: 2,
          columns: JSON.stringify({
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
          }),
        },
      ],
    };
    const records = convertToRecords(recordData);
    expect(records).toEqual({
      1: {
        0: {
          fieldKind: "text",
          value: "Record 1",
          editing: false,
        },
        1: {
          fieldKind: "text",
          value: "Record 2",
          editing: false,
        },
      },
      2: {
        0: {
          fieldKind: "text",
          value: "Record 1",
          editing: false,
        },
        1: {
          fieldKind: "text",
          value: "Record 2",
          editing: false,
        },
      },
    } as Records);
  });
});

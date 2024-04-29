import { ImportFileHistory } from "@oneforall/domain/schema/recordSchema";
import { convertToImportHistories } from "@pages/appRecordImport/server/convertToImportHistories";

import { GetImportFileQuery } from "../../../../../../packages/graphql/public/type";

describe("convertToImportHistories", () => {
  it("converts import file data to import histories", () => {
    // const mockDate = new Date(1594374371110);
    // jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    const importFileHistories: GetImportFileQuery["importFileHistories"] = [
      {
        __typename: "ImportFileHistory",
        id: "file1",
        importDatetime: "2021-01-01T00:00:00Z",
        count: 1,
        fileName: "test1.csv",
        importFileRecords: [
          {
            __typename: "ImportFileRecord",
            id: "ifr1",
            record: {
              __typename: "Record",
              id: "r1",
              index: 1,
              columns: {
                0: {
                  fieldId: "11111",
                  fieldKind: "text",
                  value: "Record 1",
                  editing: false,
                },
                1: {
                  fieldId: "22222",
                  fieldKind: "text",
                  value: "Record 2",
                  editing: false,
                },
              },
            },
          },
          {
            __typename: "ImportFileRecord",
            id: "ifr2",
            record: {
              __typename: "Record",
              id: "r2",
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
          },
        ],
      },
    ];
    const importHistories = convertToImportHistories(importFileHistories);
    expect(importHistories).toStrictEqual<ImportFileHistory[]>([
      {
        id: "file1",
        importDate: new Date("2021-01-01T00:00:00Z"),
        importCount: 1,
        fileName: "test1.csv",
        importFileRecords: {
          1: {
            recordId: "r1",
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
          2: {
            recordId: "r2",
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
        },
      },
    ]);
  });
});

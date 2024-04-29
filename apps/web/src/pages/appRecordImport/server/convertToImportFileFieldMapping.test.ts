import { Fields } from "@oneforall/domain/schema/recordSchema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/recordSchema/importFileFieldMappingSchema";
import { convertToImportFileFieldMapping } from "@pages/appRecordImport/server/convertToImportFileFieldMapping";

describe("convertToImportFileFieldMapping", () => {
  it("should convert fields to import file field mapping", () => {
    const fields: Fields = {
      "11111": {
        id: "11111",
        fieldName: "test1",
        fieldKind: "text",
        fieldIndex: 0,
        options: {},
      },
      "22222": {
        id: "22222",
        fieldName: "test2",
        fieldKind: "selectBox",
        fieldIndex: 2,
        options: {
          selector: [
            {
              value: "1",
              label: "1",
            },
          ],
        },
      },
    };
    const actual = convertToImportFileFieldMapping(fields);
    expect(actual).toEqual<ImportFileFieldMapping>({
      "11111": { fieldName: "test1", fileColumnIndex: 0 },
      "22222": { fieldName: "test2", fileColumnIndex: 2 },
    });
  });
});

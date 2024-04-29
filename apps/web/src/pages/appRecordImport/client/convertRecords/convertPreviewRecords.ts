import { Fields, PreviewRecords } from "@oneforall/domain/schema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/importFileFieldMappingSchema";
import { convertToPreviewRecordColumns } from "@pages/appRecordImport/client/convertRecords/convertToPreviewRecordColumns";
import { makeInvertFieldMapping } from "@pages/appRecordImport/client/convertRecords/makeInvertFieldMapping";

export const convertPreviewRecords = (
  data: string[][],
  fields: Fields,
  fieldsMapping: ImportFileFieldMapping,
): PreviewRecords => {
  const invertFieldMapping = makeInvertFieldMapping(fieldsMapping, fields);

  return Object.fromEntries(
    data.map((row, i) => [
      i.toString(), // dummy
      {
        recordId: i.toString(), // dummy
        isEditing: false, // dummy
        columns: convertToPreviewRecordColumns(row, fields, invertFieldMapping),
      },
    ]),
  );
};

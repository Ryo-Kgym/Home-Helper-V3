import { Fields, PreviewRecords } from "@oneforall/domain/schema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/importFileFieldMappingSchema";
import { convertToPreviewRecordColumns } from "@pages/appRecordImport/client/convertRecords/convertToPreviewRecordColumns";

export const convertPreviewRecords = (
  data: string[][],
  fields: Fields,
  fieldsMapping: ImportFileFieldMapping,
): PreviewRecords =>
  Object.fromEntries(
    data.map((row, i) => [
      i.toString(), // dummy
      {
        recordId: i.toString(), // dummy
        isEditing: false, // dummy
        columns: convertToPreviewRecordColumns(row, fields, fieldsMapping),
      },
    ]),
  );

import { Fields } from "@oneforall/domain/schema/appSchema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/importFileFieldMappingSchema";
import { PreviewRecords } from "@oneforall/domain/schema/previewRecordsSchema";
import { convertToPreviewRecordColumns } from "@pageComponents/appRecordImport/client/convertRecords/convertToPreviewRecordColumns";

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

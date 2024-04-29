import { Fields } from "@oneforall/domain/schema/recordSchema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/recordSchema/importFileFieldMappingSchema";

export const convertToImportFileFieldMapping = (
  fields: Fields,
): ImportFileFieldMapping =>
  Object.fromEntries(
    Object.entries(fields).map(([fieldId, value]) => [
      fieldId,
      {
        fieldName: value.fieldName,
        fileColumnIndex: value.fieldIndex,
      },
    ]),
  );

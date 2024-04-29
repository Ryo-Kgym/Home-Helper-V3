import { Fields } from "@oneforall/domain/schema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/importFileFieldMappingSchema";

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

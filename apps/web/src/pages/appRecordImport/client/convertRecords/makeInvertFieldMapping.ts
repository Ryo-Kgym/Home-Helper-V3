import { Field, Fields } from "@oneforall/domain/schema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/importFileFieldMappingSchema";

export const makeInvertFieldMapping = (
  fieldsMapping: ImportFileFieldMapping,
  fields: Fields,
): Record<number, Field> =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  Object.fromEntries(
    Object.entries(fieldsMapping)
      .filter(([, value]) => value.fileColumnIndex !== null)
      .map(([fieldId, value]) => [value.fileColumnIndex, fields[fieldId]]),
  );

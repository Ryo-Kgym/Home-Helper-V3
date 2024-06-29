import type { Fields } from "@oneforall/domain/schema/appSchema";
import type { RecordColumns } from "@oneforall/domain/schema/recordSchema";

export const makeColumnsTemplate = (fields: Fields): RecordColumns =>
  Object.entries(fields).reduce(
    (acc, [fieldId, field]) => ({
      ...acc,
      [fieldId]: {
        fieldKind: field.fieldKind,
        value: "",
      },
    }),
    {},
  );

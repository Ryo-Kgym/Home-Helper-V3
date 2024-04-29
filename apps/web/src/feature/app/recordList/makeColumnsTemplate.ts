import type { Fields } from "@oneforall/domain/schema/recordSchema/appSchema";
import type { Columns } from "@oneforall/domain/schema/recordSchema/recordSchema";

export const makeColumnsTemplate = (fields: Fields): Columns =>
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

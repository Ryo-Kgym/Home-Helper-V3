import type { Fields } from "@oneforall/domain/schema/appSchema";
import type { Columns } from "@oneforall/domain/schema/recordSchema";

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

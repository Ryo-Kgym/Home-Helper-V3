import type { Fields } from "@oneforall/domain/schema/app-schema";
import type { Columns } from "@oneforall/domain/schema/record-schema";

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

import type { Fields } from "@feature/app/schema/app-schema";
import type { Columns } from "@feature/app/schema/record-schema";

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

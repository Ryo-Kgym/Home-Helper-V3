import type { Columns } from "@oneforall/domain/schema/record-schema";
import type { Fields } from "@oneforall/domain/schema/view-schema";

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

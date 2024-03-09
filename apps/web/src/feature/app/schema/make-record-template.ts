import type { Fields } from "@feature/app/schema/app-schema";
import type { Record } from "@feature/app/schema/record-schema";

export const makeRecordTemplate = (fields: Fields): Record =>
  Object.entries(fields).reduce(
    (acc, [fieldId, field]) => ({
      ...acc,
      [fieldId]: {
        fieldId: parseInt(fieldId),
        fieldKind: field.fieldKind,
        value: "",
        editing: true,
      },
    }),
    {},
  );

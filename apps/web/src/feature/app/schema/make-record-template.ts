import type { Field } from "@feature/app/schema/app-schema";
import type { Record } from "@feature/app/schema/record-schema";

export const makeRecordTemplate = (fields: Field): Record =>
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

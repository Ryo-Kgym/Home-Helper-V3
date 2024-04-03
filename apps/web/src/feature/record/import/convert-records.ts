import type { Field, Fields } from "@feature/app/schema";
import type { PreviewRecords } from "@feature/record/import/preview-records-schema";

export const convertRecords = (
  data: string[][],
  fields: Fields,
): PreviewRecords =>
  Object.fromEntries(
    data.map((row, i) => [
      i.toString(), // dummy
      {
        recordId: i.toString(), // dummy
        isEditing: false, // dummy
        columns: Object.fromEntries(
          row.map((value, columnIndex) => {
            const targetField = Object.values(fields).find(
              ({ fieldIndex }) => fieldIndex === columnIndex,
            );

            if (!targetField) {
              throw new Error(
                `Field not found for index ${columnIndex}: ${value}`,
              );
            }

            return [
              targetField?.id,
              {
                value: convertValue(value, targetField),
                fieldKind: targetField.fieldKind,
              },
            ];
          }),
        ),
      },
    ]),
  );

const convertValue = (value: string, field: Field) => {
  switch (field.fieldKind) {
    case "text":
    case "multipleText":
      return value;
    case "selectBox": {
      const options = field.options;
      const foundSelector = options.selector.find(
        ({ label }) => label === value,
      );

      return foundSelector?.value ?? value;
    }
    case "lookup":
      return value;
  }
};

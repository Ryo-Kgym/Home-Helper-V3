import type { Field, Fields } from "@feature/app/schema";
import type { PreviewRecords } from "@feature/app/schema/preview-records-schema";

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
                fieldKind: targetField.fieldKind,
                ...convertValue(value, targetField),
              },
            ];
          }),
        ),
      },
    ]),
  );

const convertValue = (
  originalValue: string,
  field: Field,
): {
  originalValue: string | undefined;
  value: string;
  errorMessage: string | undefined;
} => {
  switch (field.fieldKind) {
    case "text":
    case "multipleText":
      return {
        originalValue: undefined,
        value: originalValue,
        errorMessage: undefined,
      };
    case "selectBox": {
      const options = field.options;
      const foundSelector = options.selector.find(
        ({ label }) => label === originalValue,
      );

      const errorMessage = foundSelector ? undefined : "選択肢が見つかりません";

      return {
        originalValue,
        value: foundSelector?.value ?? originalValue,
        errorMessage,
      };
    }
    case "lookup":
      return {
        originalValue: undefined,
        value: originalValue,
        errorMessage: undefined,
      };
  }
};

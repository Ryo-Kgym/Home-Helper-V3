import type { Fields } from "@feature/app/schema";
import type { PreviewRecords } from "@feature/app/schema/preview-records-schema";
import { convertValue } from "@feature/record/import/convert-records/convert-value";

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

import type { Fields, Records } from "@feature/app/schema";

export const convertRecords = (data: string[][], fields: Fields): Records =>
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
              { value, fieldKind: targetField.fieldKind },
            ];
          }),
        ),
      },
    ]),
  );

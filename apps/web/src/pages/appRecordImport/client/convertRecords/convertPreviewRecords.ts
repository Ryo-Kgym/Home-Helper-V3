import { Fields, PreviewRecords } from "@oneforall/domain/schema";

import { switchValueConverter } from "./switchValueConverter";

export const convertPreviewRecords = (
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
                ...switchValueConverter(value, targetField),
              },
            ];
          }),
        ),
      },
    ]),
  );

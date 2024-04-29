import { Field, Fields, PreviewRecordColumn } from "@oneforall/domain/schema";
import { switchValueConverter } from "@pages/appRecordImport/client/convertRecords/switchValueConverter";

export const convertToPreviewRecordColumns = (
  row: string[],
  fields: Fields,
  invertFieldMapping: Record<number, Field>,
): PreviewRecordColumn => {
  const filteredColumns = Object.fromEntries(
    row
      .map((value, columnIndex) => {
        const targetField = invertFieldMapping[columnIndex];

        if (!targetField) {
          // 次の行に進む
          return [-1, null];
        }

        return [
          targetField.id,
          {
            fieldKind: targetField.fieldKind,
            ...switchValueConverter(value, targetField),
          },
        ];
      })
      .filter(([key]) => key !== -1),
  );

  return Object.fromEntries(
    Object.entries(fields).map(([fieldId, field]) => {
      if (filteredColumns[fieldId]) {
        return [fieldId, filteredColumns[fieldId]];
      }

      return [
        fieldId,
        {
          errorMessage: undefined,
          fieldKind: field.fieldKind,
          originalValue: "",
          value: "",
        },
      ];
    }),
  );
};

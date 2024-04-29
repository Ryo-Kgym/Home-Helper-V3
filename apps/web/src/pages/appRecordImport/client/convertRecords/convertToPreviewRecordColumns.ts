import { Fields } from "@oneforall/domain/schema/appSchema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/importFileFieldMappingSchema";
import { PreviewRecordColumn } from "@oneforall/domain/schema/previewRecordsSchema";
import { switchValueConverter } from "@pages/appRecordImport/client/convertRecords/switchValueConverter";

/**
 * @package
 */
export const convertToPreviewRecordColumns = (
  row: string[],
  fields: Fields,
  fieldMapping: ImportFileFieldMapping,
): PreviewRecordColumn =>
  Object.fromEntries(
    Object.entries(fields).map(([fieldId, field]) => {
      const fileColumnIndex = fieldMapping[fieldId]?.fileColumnIndex ?? null;

      if (fileColumnIndex !== null) {
        const value = row[fileColumnIndex];

        if (!value) {
          throw new Error(
            `取り込んだファイルに存在しない列番号です。フィールド名：${fieldMapping[fieldId]?.fieldName}、誤った列番号：${fileColumnIndex}`,
          );
        }

        return [
          fieldId,
          {
            fieldKind: field.fieldKind,
            ...switchValueConverter(value, field),
          },
        ];
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

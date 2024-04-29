import { Field, Fields, PreviewRecordColumn } from "@oneforall/domain/schema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/importFileFieldMappingSchema";
import { switchValueConverter } from "@pages/appRecordImport/client/convertRecords/switchValueConverter";

export const convertToPreviewRecordColumns = (
  row: string[],
  fields: Fields,
  fieldMapping: ImportFileFieldMapping,
): PreviewRecordColumn => {
  return Object.fromEntries(
    Object.entries(fields).map(([fieldId, field]) => {
      const fileColumnIndex = fieldMapping[fieldId]?.fileColumnIndex ?? null;

      if (fileColumnIndex !== null) {
        return caseFoundIndex(
          row,
          fieldMapping[fieldId]?.fieldName ?? "",
          fieldId,
          field,
          fileColumnIndex,
        );
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

const caseFoundIndex = (
  row: string[],
  fieldName: ImportFileFieldMapping[string]["fieldName"],
  fieldId: string,
  field: Field,
  fileColumnIndex: number,
) => {
  const value = row[fileColumnIndex];

  if (!value) {
    throw new Error(
      `取り込んだファイルに存在しない列番号です。フィールド名：${fieldName}、誤った列番号：${fileColumnIndex}`,
    );
  }

  return [
    fieldId,
    {
      fieldKind: field.fieldKind,
      ...switchValueConverter(value, field),
    },
  ];
};

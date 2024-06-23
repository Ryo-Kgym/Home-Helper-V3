import {
  PreviewRecordColumn,
  PreviewRecords,
} from "@oneforall/domain/schema/previewRecordsSchema";
import { recordColumnSchema } from "@oneforall/domain/schema/recordSchema";
import { LookupRecords } from "@oneforall/domain/type/lookupRecords";
import { RecordInsertInput } from "@v3/graphql/public";

/**
 * @package
 */
export const convertToRecordObjects = (
  appId: string,
  previewRecords: PreviewRecords,
  recordIds: string[],
  currentMaxIndex: number,
  lookupRecords: LookupRecords,
): RecordInsertInput[] =>
  Object.values(previewRecords).map(({ columns }, index) => ({
    id: recordIds[index],
    appId,
    columns: Object.fromEntries(
      Object.entries(columns).map(([fieldId, column]) => {
        const lookupRecord = lookupRecords[fieldId] ?? {};

        return [
          fieldId,
          {
            ...recordColumnSchema.parse(column),
            ...optionsAttribute(column, lookupRecord),
          },
        ];
      }),
    ),
    index: currentMaxIndex + index + 1,
  }));

const optionsAttribute = (
  column: PreviewRecordColumn,
  lookupRecord: Record<string, string>,
) => {
  switch (column.fieldKind) {
    case "lookup": {
      return {
        options: {
          label: lookupRecord[column.value ?? ""] ?? "",
        },
      };
    }
    default: {
      {
        return {
          options: undefined,
        };
      }
    }
  }
};

import {
  PreviewRecordColumn,
  PreviewRecords,
} from "@oneforall/domain/schema/previewRecordsSchema";
import { recordColumnSchema } from "@oneforall/domain/schema/recordSchema";
import { RecordInsertInput } from "@v3/graphql/public";

/**
 * @package
 */
export const convertToRecordObjects = (
  appId: string,
  previewRecords: PreviewRecords,
  recordIds: string[],
  currentMaxIndex: number,
): RecordInsertInput[] =>
  Object.values(previewRecords).map(({ columns }, index) => ({
    id: recordIds[index],
    appId,
    columns: Object.fromEntries(
      Object.entries(columns).map(([fieldId, column]) => [
        fieldId,
        { ...recordColumnSchema.parse(column), ...optionsAttribute(column) },
      ]),
    ),
    index: currentMaxIndex + index + 1,
  }));

const optionsAttribute = (column: PreviewRecordColumn) => {
  switch (column.fieldKind) {
    case "lookup": {
      return {
        options: {
          label: column.value,
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

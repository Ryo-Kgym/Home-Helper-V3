import { PreviewRecords, recordColumnSchema } from "@oneforall/domain/schema";
import { RecordInsertInput } from "@v3/graphql/public";

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
      Object.entries(columns).map(([key, column]) => [
        key,
        recordColumnSchema.parse(column),
      ]),
    ),
    index: currentMaxIndex + index + 1,
  }));

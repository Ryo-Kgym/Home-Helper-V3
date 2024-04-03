import type { ImportFileHistory } from "@feature/app/schema";
import type { PreviewRecords } from "@feature/record/import/preview-records-schema";
import type { RecordInsertInput } from "@v3/graphql/public";
import { generateId } from "@feature/app/function/generate-id";
import { recordColumnSchema } from "@feature/app/schema";
import {
  useGetMaxRecordIndexQuery,
  useInsertImportFileHistoryMutation,
  useInsertImportFileRecordsMutation,
} from "@v3/graphql/public";

export const useInsertImportFileRecords = ({ appId }: { appId: string }) => {
  const [, mutHistory] = useInsertImportFileHistoryMutation();
  const [, mutRecords] = useInsertImportFileRecordsMutation();
  const [{ data: maxRecordIndexData }] = useGetMaxRecordIndexQuery({
    variables: { appId },
  });

  const insertImportFileRecords = async (
    records: PreviewRecords,
    fileName: string,
  ) => {
    const historyId = generateId();

    // eslint-disable-next-line no-useless-catch
    try {
      const { data, error: historyError } = await mutHistory({
        id: historyId,
        appId,
        fileName,
        count: Object.keys(records).length,
        importDatetime: new Date().toISOString(),
      });
      if (historyError) {
        throw historyError;
      }

      await insertRecords(records, historyId);

      if (!data?.insertImportFileHistoryOne) {
        throw new Error("insertImportFileHistoryOne is not found");
      }

      const importFileHistory: ImportFileHistory = {
        id: historyId,
        importDate:
          data.insertImportFileHistoryOne.importDatetime ?? new Date(),
        fileName,
        importCount: data.insertImportFileHistoryOne.count ?? 0,
        importFileRecords: records,
      };

      return { importFileHistory };
    } catch (e) {
      throw e;
    }
  };

  const insertRecords = async (
    previewRecords: PreviewRecords,
    historyId: string,
  ) => {
    const currentMaxIndex =
      maxRecordIndexData?.recordAggregate.aggregate?.max?.index ?? 0;

    const recordIds = Object.values(previewRecords).map((_, index) =>
      generateId(index),
    );

    const recordObjects: RecordInsertInput[] = Object.values(
      previewRecords,
    ).map(({ columns }, index) => ({
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

    const { error: recordsError } = await mutRecords({
      recordObjects,
      relationObjects: recordIds.map((recordId) => ({
        recordId,
        historyId,
      })),
    });
    if (recordsError) {
      throw recordsError;
    }
  };

  return { insertImportFileRecords };
};

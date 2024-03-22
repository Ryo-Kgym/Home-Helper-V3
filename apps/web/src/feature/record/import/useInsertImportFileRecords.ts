import type { ImportFileHistory, Records } from "@feature/app/schema";
import { generateId } from "@feature/app/function/generate-id";
import {
  useInsertImportFileHistoryMutation,
  useInsertImportFileRecordsMutation,
} from "@v3/graphql/public";

export const useInsertImportFileRecords = ({ appId }: { appId: string }) => {
  const [, mutHistory] = useInsertImportFileHistoryMutation();
  const [, mutRecords] = useInsertImportFileRecordsMutation();

  const insertImportFileRecords = async (
    records: Records,
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

  const insertRecords = async (records: Records, historyId: string) => {
    const recordIds = Object.values(records).map((v, index) =>
      generateId(index),
    );

    const { error: recordsError } = await mutRecords({
      recordObjects: Object.values(records).map(({ columns }, index) => ({
        id: recordIds[index],
        appId,
        columns,
        index,
      })),
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

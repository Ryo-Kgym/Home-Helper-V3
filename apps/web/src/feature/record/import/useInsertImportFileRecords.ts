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

    const { error: recordsError } = await mutRecords({
      objects: Object.values(records).map(({ columns }, index) => ({
        id: generateId(index),
        appId,
        columns,
        index,
        historyId,
      })),
    });
    if (recordsError) {
      throw recordsError;
    }

    if (!data?.insertImportFileHistoryOne) {
      throw new Error("insertImportFileHistoryOne is not found");
    }

    const importFileHistory: ImportFileHistory = {
      id: historyId,
      importDate: data.insertImportFileHistoryOne.importDatetime ?? new Date(),
      fileName,
      importCount: data.insertImportFileHistoryOne.count ?? 0,
      importFileRecords: records,
    };

    return { importFileHistory };
  };

  return { insertImportFileRecords };
};

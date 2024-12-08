import { ImportFileHistory } from "@oneforall/domain/schema/importFileHistorySchema";
import { PreviewRecords } from "@oneforall/domain/schema/previewRecordsSchema";
import { LookupRecords } from "@oneforall/domain/type/lookupRecords";
import {
  useGetMaxRecordIndexQuery,
  useInsertImportFileHistoryMutation,
  useInsertImportFileRecordsMutation,
} from "@v3/graphql/public";

import {
  generateId,
  generateIds,
} from "../../../../feature/app/function/generateId";
import { convertToRecordObjects } from "./convertToRecordObjects";

// TODO test
export const useInsertImportFileRecords = ({
  appId,
  lookupRecords,
}: {
  appId: string;
  lookupRecords: LookupRecords;
}) => {
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
      importDate: data.insertImportFileHistoryOne.importDatetime ?? new Date(),
      fileName,
      importCount: data.insertImportFileHistoryOne.count ?? 0,
      importFileRecords: records,
    };

    return { importFileHistory };
  };

  const insertRecords = async (
    previewRecords: PreviewRecords,
    historyId: string,
  ) => {
    const currentMaxIndex =
      maxRecordIndexData?.recordAggregate.aggregate?.max?.index ?? 0;

    const recordIds = generateIds(previewRecords);

    const { error: recordsError } = await mutRecords({
      recordObjects: convertToRecordObjects(
        appId,
        previewRecords,
        recordIds,
        currentMaxIndex,
        lookupRecords,
      ),
      relationObjects: recordIds.map((recordId) => ({
        recordId,
        historyId,
        appId,
      })),
    });
    if (recordsError) {
      throw recordsError;
    }
  };

  return { insertImportFileRecords };
};

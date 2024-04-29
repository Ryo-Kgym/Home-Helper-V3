import type { Columns } from "@oneforall/domain/schema/recordSchema/recordSchema";
import { generateId } from "@feature/app/function/generate-id";
import { calcNextIndex } from "@feature/app/recordList/operation/SaveNewRecordButton/calc-next-index";
import { useResetNewRecord } from "@feature/app/recordList/operation/useNewRecordState";
import { useResetMode } from "@feature/app/recordList/useModeState";
import {
  useAddRecord,
  useRecords,
} from "@feature/app/recordList/useRecordsState";
import { useInsertRecordMutation } from "@v3/graphql/public";

export const useSaveNewRecord = (appId: string) => {
  const { records } = useRecords();

  const [, mut] = useInsertRecordMutation();
  const addRecord = useAddRecord();
  const resetNewRecord = useResetNewRecord();
  const resetMode = useResetMode();

  const saveNewRecord = async (columns: Columns) => {
    const index = calcNextIndex(records);
    const recordId = generateId();

    const { error } = await mut({
      id: recordId,
      appId,
      index,
      columns,
    });
    if (error) throw error;

    addRecord(index, {
      recordId,
      columns,
      isEditing: false,
    });

    resetNewRecord();
    resetMode();
  };

  return { saveNewRecord };
};

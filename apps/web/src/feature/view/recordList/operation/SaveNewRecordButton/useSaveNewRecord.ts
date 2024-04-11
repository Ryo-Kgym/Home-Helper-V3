import { generateId } from "@feature/view/function/generate-id";
import { calcNextIndex } from "@feature/view/recordList/operation/SaveNewRecordButton/calc-next-index";
import { useResetNewRecord } from "@feature/view/recordList/operation/useNewRecordState";
import { useResetMode } from "@feature/view/recordList/useModeState";
import {
  useAddRecord,
  useRecords,
} from "@feature/view/recordList/useRecordsState";
import type { Columns } from "@oneforall/domain/schema";
import { useInsertRecordMutation } from "@v3/graphql/public";

export const useSaveNewRecord = (viewId: string) => {
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
      viewId,
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

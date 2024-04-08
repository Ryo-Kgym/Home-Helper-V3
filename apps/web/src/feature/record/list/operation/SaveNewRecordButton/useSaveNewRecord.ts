import { generateId } from "@feature/app/function/generate-id";
import { calcNextIndex } from "@feature/record/list/operation/SaveNewRecordButton/calc-next-index";
import { useResetNewRecord } from "@feature/record/list/operation/useNewRecordState";
import { useResetMode } from "@feature/record/list/useModeState";
import { useAddRecord, useRecords } from "@feature/record/list/useRecordsState";
import { useInsertRecordMutation } from "@v3/graphql/public";

import type { Columns } from "@feature/app/schema";

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

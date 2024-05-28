import { generateId } from "@feature/app/function/generateId";
import { calcNextIndex } from "@features/appRecordList/components/operation/SaveNewRecordButton/calc-next-index";
import { useResetNewRecord } from "@hooks/states/app/record/useResetNewRecord";
import { useResetMode } from "@hooks/states/app/recordListMode/useModeStateZustand";
import { useAddRecord } from "@hooks/states/app/records/useAddRecord";
import { useRecords } from "@hooks/states/app/records/useRecords";
import { RecordColumns } from "@oneforall/domain/schema/recordSchema";
import { useInsertRecordMutation } from "@v3/graphql/public";

export const useSaveNewRecord = (appId: string) => {
  const { records } = useRecords();

  const [, mut] = useInsertRecordMutation();
  const addRecord = useAddRecord();
  const resetNewRecord = useResetNewRecord();
  const resetMode = useResetMode();

  const saveNewRecord = async (columns: RecordColumns) => {
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

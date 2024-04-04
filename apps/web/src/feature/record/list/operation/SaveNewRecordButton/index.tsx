import type { Columns } from "@feature/app/schema/record-schema";
import { notify } from "@components/ui/v4/notify/notify";
import { generateId } from "@feature/app/function/generate-id";
import { calcNextIndex } from "@feature/record/list/operation/SaveNewRecordButton/calc-next-index";
import { useResetNewRecord } from "@feature/record/list/operation/useNewRecordState";
import { useResetMode } from "@feature/record/list/useModeState";
import { useAddRecord, useRecords } from "@feature/record/list/useRecordsState";
import { useInsertRecordMutation } from "@v3/graphql/public";

export const SaveNewRecordButton = ({
  appId,
  columns,
}: {
  appId: string;
  columns: Columns;
}) => {
  const { records } = useRecords();
  const resetMode = useResetMode();
  const resetNewRecord = useResetNewRecord();
  const add = useAddRecord();

  const [, mut] = useInsertRecordMutation();

  const saveRecordHandler = async () => {
    const index = calcNextIndex(records);
    const recordId = generateId();

    try {
      const { error } = await mut({
        id: recordId,
        appId,
        index,
        columns,
      });
      if (error) throw error;

      add(index, {
        recordId,
        columns,
        isEditing: false,
      });

      resetNewRecord();
      resetMode();
      notify("レコードを追加しました");
    } catch (e) {
      console.error(e);
      notify("レコード追加に失敗しました");
    }
  };

  return <button onClick={saveRecordHandler}>追加</button>;
};

import type { Columns } from "@feature/app/schema/record-schema";
import { notify } from "@components/ui/v4/notify/notify";
import { generateId } from "@feature/app/function/generate-id";
import { useResetMode } from "@feature/record/list/useModeState";
import { useRecords } from "@feature/record/list/useRecordsState";
import { useInsertRecordMutation } from "@v3/graphql/public";

export const SaveNewRecordButton = ({
  appId,
  newRecord,
  setNewRecord,
  columnsTemplate,
}: {
  appId: string;
  newRecord: Columns;
  setNewRecord: (newRecord: Columns) => void;
  columnsTemplate: Columns;
}) => {
  const { records, setRecords } = useRecords();
  const resetMode = useResetMode();

  const [, mut] = useInsertRecordMutation();

  const saveRecordHandler = async () => {
    const newRecordIndex = Math.max(
      ...Object.keys(records).map((n) => parseInt(n)),
    );
    const recordId: string = generateId();

    try {
      const { error } = await mut({
        id: recordId,
        appId,
        index: newRecordIndex,
        columns: Object.fromEntries(
          Object.entries(newRecord).map(([fieldId, value]) => [fieldId, value]),
        ),
      });
      if (error) throw error;

      setRecords({
        ...records,
        [newRecordIndex]: {
          recordId,
          columns: Object.fromEntries(
            Object.entries(newRecord).map(([fieldId, value]) => [
              fieldId,
              {
                ...value,
                editing: false,
              },
            ]),
          ),
        },
      });
      setNewRecord(columnsTemplate);
      resetMode();
      notify("レコードを追加しました");
    } catch (e) {
      console.error(e);
      notify("レコード追加に失敗しました");
    }
  };

  return <button onClick={saveRecordHandler}>追加</button>;
};

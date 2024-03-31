import type { Columns, Records } from "@feature/app/schema/record-schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import { notify } from "@components/ui/v4/notify/notify";
import { generateId } from "@feature/app/function/generate-id";
import { useInsertRecordMutation } from "@v3/graphql/public";

export const SaveNewRecordButton = ({
  appId,
  records,
  setRecords,
  newRecord,
  setNewRecord,
  setMode,
  columnsTemplate,
}: {
  appId: string;
  records: Records;
  setRecords: (records: Records) => void;
  newRecord: Columns;
  setNewRecord: (newRecord: Columns) => void;
  setMode: (mode: RecordListMode) => void;
  columnsTemplate: Columns;
  setRecord: (record: Records[number]) => void;
}) => {
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
      setMode("show");
      notify("レコードを追加しました");
    } catch (e) {
      console.error(e);
      notify("レコード追加に失敗しました");
    }
  };

  return <button onClick={saveRecordHandler}>追加</button>;
};

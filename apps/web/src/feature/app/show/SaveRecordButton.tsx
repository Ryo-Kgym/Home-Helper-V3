import type { Record, RecordList } from "@feature/app/schema/record-schema";
import { generateId } from "@feature/app/function/generate-id";
import { useInsertRecordMutation } from "@v3/graphql/public";

export const SaveRecordButton = ({
  appId,
  recordId,
  records,
  setRecords,
  newRecord,
  setNewRecord,
  addingRecord,
  setAddingRecord,
  recordTemplate,
}: {
  appId: string;
  recordId: string;
  records: RecordList;
  setRecords: (records: RecordList) => void;
  newRecord: Record;
  setNewRecord: (newRecord: Record) => void;
  addingRecord: boolean;
  setAddingRecord: (addingRecord: boolean) => void;
  recordTemplate: Record;
}) => {
  const [, mut] = useInsertRecordMutation();

  const saveRecordHandler = async (recordId: string) => {
    if (!addingRecord) return;

    const record: Record = {
      ...Object.entries(newRecord).reduce(
        (acc, [fieldId, column]) => ({
          ...acc,
          [fieldId]: {
            ...column,
            editing: false,
          },
        }),
        {},
      ),
    };

    try {
      const { error } = await mut({
        id: generateId(),
        appId,
        index: parseInt(recordId),
        columns: JSON.stringify(record),
      });
      if (error) throw error;

      setRecords({
        ...records,
        [recordId]: record,
      });
      setNewRecord(recordTemplate);
      setAddingRecord(false);
      alert("保存しました");
    } catch (e) {
      console.error(e);
      alert("保存に失敗しました");
    }
  };

  return <button onClick={() => saveRecordHandler(recordId)}>保存</button>;
};

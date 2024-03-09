import type { Record, RecordList } from "@feature/app/schema/record-schema";

export const SaveRecordButton = ({
  recordId,
  records,
  setRecords,
  newRecord,
  setNewRecord,
  addingRecord,
  setAddingRecord,
  recordTemplate,
}: {
  recordId: string;
  records: RecordList;
  setRecords: (records: RecordList) => void;
  newRecord: Record;
  setNewRecord: (newRecord: Record) => void;
  addingRecord: boolean;
  setAddingRecord: (addingRecord: boolean) => void;
  recordTemplate: Record;
}) => {
  const saveRecordHandler = (recordId: string) => {
    if (!addingRecord) return;

    const record: Record = {
      ...Object.entries(newRecord).reduce(
        (acc, [fieldId, column]) => ({
          ...acc,
          [fieldId]: {
            ...column,
            confirmed: true,
          },
        }),
        {},
      ),
    };
    setRecords({
      ...records,
      [recordId]: record,
    });
    setNewRecord(recordTemplate);
    setAddingRecord(false);
  };

  return <button onClick={() => saveRecordHandler(recordId)}>保存</button>;
};

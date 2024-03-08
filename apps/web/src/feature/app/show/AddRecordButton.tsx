import type { Record, RecordList } from "@feature/app/schema/record-schema";

export const AddRecordButton = ({
  addingRecord,
  setAddingRecord,
  records,
  setRecords,
  recordTemplate,
}: {
  addingRecord: boolean;
  setAddingRecord: React.Dispatch<React.SetStateAction<boolean>>;
  records: RecordList;
  setRecords: React.Dispatch<React.SetStateAction<RecordList>>;
  recordTemplate: Record;
}) => {
  const addRecordHandler = () => {
    if (addingRecord) return;

    setAddingRecord(true);
    const newRecordId =
      Object.keys(records).length > 0
        ? Math.max(
            ...Object.keys(records).map((recordId) => parseInt(recordId)),
          ) + 1
        : 1;
    setRecords({
      ...records,
      [newRecordId]: recordTemplate,
    });
  };

  return <button onClick={addRecordHandler}>レコード追加</button>;
};

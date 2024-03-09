import type { Record, Records } from "@feature/app/schema/record-schema";

export const AddRecordButton = ({
  addingRecord,
  setAddingRecord,
  records,
  setRecords,
  recordTemplate,
}: {
  addingRecord: boolean;
  setAddingRecord: React.Dispatch<React.SetStateAction<boolean>>;
  records: Records;
  setRecords: React.Dispatch<React.SetStateAction<Records>>;
  recordTemplate: Record;
}) => {
  const addRecordHandler = () => {
    if (addingRecord) return;

    setAddingRecord(true);
    const newRecordIndex =
      Object.keys(records).length > 0
        ? Math.max(...Object.values(records).map(({ index }) => index)) + 1
        : 1;
    setRecords({
      ...records,
      [Infinity]: {
        index: newRecordIndex,
        columns: recordTemplate,
      },
    });
  };

  return <button onClick={addRecordHandler}>レコード追加</button>;
};

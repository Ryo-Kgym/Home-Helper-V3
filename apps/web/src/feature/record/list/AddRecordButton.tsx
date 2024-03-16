import type { Record, Records } from "@feature/app/schema/record-schema";
import { generateId } from "@feature/app/function/generate-id";

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
        ? Math.max(...Object.keys(records).map((n) => parseInt(n))) + 1
        : 1;
    setRecords({
      ...records,
      [newRecordIndex]: {
        recordId: generateId(),
        columns: recordTemplate,
        isEditing: true,
      },
    });
  };

  return <button onClick={addRecordHandler}>レコード追加</button>;
};

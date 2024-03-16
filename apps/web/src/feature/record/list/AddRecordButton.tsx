import type { Record, Records } from "@feature/app/schema/record-schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import { generateId } from "@feature/app/function/generate-id";

export const AddRecordButton = ({
  mode,
  setMode,
  records,
  setRecords,
  recordTemplate,
}: {
  mode: RecordListMode;
  setMode: (mode: RecordListMode) => void;
  records: Records;
  setRecords: React.Dispatch<React.SetStateAction<Records>>;
  recordTemplate: Record;
}) => {
  const addRecordHandler = () => {
    if (mode === "add") return;

    setMode("add");

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

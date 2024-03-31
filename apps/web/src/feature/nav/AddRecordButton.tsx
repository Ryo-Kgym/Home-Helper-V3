import type { Record, Records } from "@feature/app/schema/record-schema";
import { generateId } from "@feature/app/function/generate-id";
import { useMode } from "@feature/record/list/useModeState";

export const AddRecordButton = ({
  records,
  setRecords,
  recordTemplate,
}: {
  records: Records;
  setRecords: (records: Records) => void;
  recordTemplate: Record;
}) => {
  const { mode, setMode } = useMode();

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

  return (
    <button className={"bg-inherit"} onClick={addRecordHandler}>
      レコード追加
    </button>
  );
};

import type { Columns, Records } from "@feature/app/schema/record-schema";
import { generateId } from "@feature/app/function/generate-id";
import { useMode } from "@feature/record/list/useModeState";

export const AddRecordButton = ({
  records,
  setRecords,
  columnTemplate,
}: {
  records: Records;
  setRecords: (records: Records) => void;
  columnTemplate: Columns;
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
        columns: columnTemplate,
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

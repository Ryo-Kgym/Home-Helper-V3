import type { Columns } from "@feature/app/schema/record-schema";
import { generateId } from "@feature/app/function/generate-id";
import { useInitNewRecord } from "@feature/record/list/operation/useNewRecordState";
import { useMode } from "@feature/record/list/useModeState";

export const AddRecordButton = ({
  columnTemplate,
}: {
  columnTemplate: Columns;
}) => {
  const { mode, setMode } = useMode();
  const initialize = useInitNewRecord();

  const addRecordHandler = () => {
    if (mode === "add") return;

    setMode("add");
    initialize({
      recordId: generateId(),
      columns: columnTemplate,
      isEditing: true,
    });
  };

  return (
    <button className={"bg-inherit"} onClick={addRecordHandler}>
      レコード追加
    </button>
  );
};

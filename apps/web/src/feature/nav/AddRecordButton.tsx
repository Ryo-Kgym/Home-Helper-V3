import type { Columns } from "@feature/app/schema/record-schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
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

  const { disabled, bgColor, cursor } = getStyle(mode);

  const addRecordHandler = () => {
    setMode("add");
    initialize({
      recordId: generateId(),
      columns: columnTemplate,
      isEditing: true,
    });
  };

  return (
    <button
      className={`${bgColor} ${cursor}`}
      disabled={disabled}
      onClick={addRecordHandler}
    >
      レコード追加
    </button>
  );
};

const getStyle = (mode: RecordListMode) =>
  mode === "add"
    ? {
        disabled: true,
        bgColor: "bg-gray-200",
        cursor: "cursor-not-allowed",
      }
    : {
        disabled: false,
        bgColor: "bg-inherit",
      };

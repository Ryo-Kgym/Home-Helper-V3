import type { RecordListMode } from "@feature/app/recordList/RecordListClient";
import type { Columns } from "@oneforall/domain/schema/recordSchema";
import { generateId } from "@feature/app/function/generate-id";
import { useInitNewRecord } from "@feature/app/recordList/operation/useNewRecordState";
import { useMode } from "@feature/app/recordList/useModeState";

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

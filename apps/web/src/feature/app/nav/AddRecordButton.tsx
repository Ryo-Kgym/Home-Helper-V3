import type { RecordColumns } from "@oneforall/domain/schema/recordSchema";
import { generateId } from "@feature/app/function/generateId";
import { RecordListMode } from "@features/appRecordList/types/recordListMode";
import { useInitNewRecord } from "@hooks/states/app/record/useInitNewRecord";
import { useRecordListMode } from "@hooks/states/app/recordListMode/useRecordListMode";

export const AddRecordButton = ({
  columnTemplate,
}: {
  columnTemplate: RecordColumns;
}) => {
  const { mode, setMode } = useRecordListMode();
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

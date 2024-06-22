import { useResetNewRecord } from "@hooks/states/app/record/useResetNewRecord";
import { useResetMode } from "@hooks/states/app/recordListMode/useModeStateZustand";

export const AddRecordCancelButton = () => {
  const reset = useResetNewRecord();
  const resetMode = useResetMode();
  const cancelHandler = () => {
    resetMode();
    reset();
  };

  return (
    <button onClick={cancelHandler} className={"bg-inherit"}>
      キャンセル
    </button>
  );
};

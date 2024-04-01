import { useResetNewRecord } from "@feature/record/list/operation/useNewRecordState";
import { useResetMode } from "@feature/record/list/useModeState";

export const AddRecordCancelButton = () => {
  const reset = useResetNewRecord();
  const resetMode = useResetMode();
  const cancelHandler = () => {
    resetMode();
    reset();
  };

  return <button onClick={cancelHandler}>キャンセル</button>;
};

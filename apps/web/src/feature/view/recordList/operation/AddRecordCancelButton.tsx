import { useResetNewRecord } from "@feature/view/recordList/operation/useNewRecordState";
import { useResetMode } from "@feature/view/recordList/useModeState";

export const AddRecordCancelButton = () => {
  const reset = useResetNewRecord();
  const resetMode = useResetMode();
  const cancelHandler = () => {
    resetMode();
    reset();
  };

  return <button onClick={cancelHandler}>キャンセル</button>;
};

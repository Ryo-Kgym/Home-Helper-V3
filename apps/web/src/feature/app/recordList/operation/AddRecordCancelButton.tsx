import { useResetNewRecord } from "@feature/app/recordList/operation/useNewRecordState";
import { useResetMode } from "@feature/app/recordList/useModeState";

export const AddRecordCancelButton = () => {
  const reset = useResetNewRecord();
  const resetMode = useResetMode();
  const cancelHandler = () => {
    resetMode();
    reset();
  };

  return <button onClick={cancelHandler}>キャンセル</button>;
};

import type { Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";

export const CancelButton = ({
  setRecords,
  setMode,
  defaultRecords,
}: {
  setRecords: (records: Records) => void;
  setMode: (mode: RecordListMode) => void;
  defaultRecords: Records;
}) => {
  const cancelHandler = () => {
    setMode("show");
    setRecords(defaultRecords);
  };

  return <button onClick={cancelHandler}>キャンセル</button>;
};

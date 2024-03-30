import type { Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";

export const CancelButton = ({
  setMode,
  defaultRecord,
  setRecord,
}: {
  setMode: (mode: RecordListMode) => void;
  defaultRecord: Records[number];
  setRecord: (record: Records[number]) => void;
}) => {
  const cancelHandler = () => {
    setMode("show");
    setRecord(defaultRecord);
  };

  return <button onClick={cancelHandler}>キャンセル</button>;
};

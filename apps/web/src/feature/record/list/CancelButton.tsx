import type { Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";

export const CancelButton = ({
  record,
  records,
  setRecords,
  setMode,
}: {
  record: Records[number];
  records: Records;
  setRecords: (records: Records) => void;
  setMode: (mode: RecordListMode) => void;
}) => {
  const cancelHandler = () => {
    setMode("show");
    const targetValue = Object.values(records).find(
      (r) => r.recordId === record.recordId,
    );

    if (targetValue) {
      targetValue.isEditing = false;
      setRecords({ ...records });
    }
  };

  return <button onClick={cancelHandler}>キャンセル</button>;
};

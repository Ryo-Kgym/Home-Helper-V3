import type { Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";

export const ModifyRecordButton = ({
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
  const openModify = () => {
    setMode("modify");
    const targetValue = Object.values(records).find(
      (r) => r.recordId === record.recordId,
    );

    if (targetValue) {
      targetValue.isEditing = true;
      setRecords({ ...records });
    }
  };

  return <button onClick={openModify}>編集</button>;
};

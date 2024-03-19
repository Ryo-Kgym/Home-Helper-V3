import type { Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";

export const ModifyRecordButton = ({
  recordIndex,
  records,
  setRecords,
  setMode,
}: {
  recordIndex: number;
  records: Records;
  setRecords: (records: Records) => void;
  setMode: (mode: RecordListMode) => void;
}) => {
  const openModify = () => {
    const copiedRecords = { ...records };
    const copiedRecord = copiedRecords[recordIndex];
    if (!copiedRecord) return;
    setMode("modify");
    copiedRecord.isEditing = true;

    setRecords(copiedRecords);
  };

  return <button onClick={openModify}>編集</button>;
};

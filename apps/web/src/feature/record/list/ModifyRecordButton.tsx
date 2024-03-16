import type { Records } from "@feature/app/schema";

export const ModifyRecordButton = ({
  record,
  records,
  setRecords,
}: {
  record: Records[number];
  records: Records;
  setRecords: (records: Records) => void;
}) => {
  const openModify = () => {
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

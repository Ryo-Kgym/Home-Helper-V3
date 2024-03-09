import type { Records } from "@feature/app/schema/record-schema";

export const DeleteRecordButton = ({
  recordId,
  records,
  setRecords,
}: {
  recordId: string;
  records: Records;
  setRecords: (records: Records) => void;
}) => {
  const deleteRecordHandler = (recordId: string) => {
    const newRecords = { ...records };
    delete newRecords[recordId];
    setRecords(newRecords);
  };

  return <button onClick={() => deleteRecordHandler(recordId)}>削除</button>;
};

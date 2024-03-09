import type { Records } from "@feature/app/schema/record-schema";
import { useDeleteRecordMutation } from "@v3/graphql/public";

export const DeleteRecordButton = ({
  recordId,
  records,
  setRecords,
}: {
  recordId: string;
  records: Records;
  setRecords: (records: Records) => void;
}) => {
  const [, mut] = useDeleteRecordMutation();

  const deleteRecordHandler = async (recordId: string) => {
    try {
      const { error } = await mut({ recordId });
      if (error) {
        throw error;
      }

      const newRecords = { ...records };
      delete newRecords[recordId];
      setRecords(newRecords);
      alert("削除しました");
    } catch (e) {
      console.error(e);
      alert("削除に失敗しました");
    }
  };

  return <button onClick={() => deleteRecordHandler(recordId)}>削除</button>;
};

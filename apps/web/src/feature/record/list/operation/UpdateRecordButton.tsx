import type { Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import { useUpdateRecordMutation } from "@v3/graphql/public";

export const UpdateRecordButton = ({
  record,
  setMode,
}: {
  record: Records[number];
  setMode: (mode: RecordListMode) => void;
}) => {
  const [, mut] = useUpdateRecordMutation();

  const updateHandler = async () => {
    try {
      const { error } = await mut({
        id: record.recordId,
        columns: record.columns,
      });
      record.isEditing = false;

      if (error) {
        throw error;
      }

      setMode("show");
      alert("レコードを更新しました");
    } catch (e) {
      console.error(e);
      alert("レコード更新に更新しました");
    }
  };

  return <button onClick={updateHandler}>更新</button>;
};

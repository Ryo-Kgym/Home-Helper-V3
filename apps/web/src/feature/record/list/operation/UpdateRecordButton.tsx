import { notify } from "@components/ui/v4/notify/notify";
import { useUpdateRecordMutation } from "@v3/graphql/public";

import type { Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";

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
      notify("レコードを更新しました");
    } catch (e) {
      console.error(e);
      notify("レコード更新に更新しました");
    }
  };

  return <button onClick={updateHandler}>更新</button>;
};

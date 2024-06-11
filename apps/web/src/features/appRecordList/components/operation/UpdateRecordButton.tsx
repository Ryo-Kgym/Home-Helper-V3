import type { Records } from "@oneforall/domain/schema/recordSchema";
import { Floppy } from "@components/ui/v4/icon/Floppy";
import { notify } from "@components/ui/v4/notify/notify";
import { RecordListMode } from "@features/appRecordList/types/recordListMode";
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
      notify("レコードを更新しました");
    } catch (e) {
      console.error(e);
      notify("レコード更新に失敗しました");
    }
  };

  return (
    <button onClick={updateHandler}>
      <Floppy />
    </button>
  );
};

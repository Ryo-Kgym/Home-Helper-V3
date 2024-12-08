import type { Records } from "@oneforall/domain/schema/recordSchema";
import { useUpdateRecordMutation } from "@v3/graphql/public";

import { Floppy } from "~/components/ui/v4/icon/Floppy";
import { notify } from "~/components/ui/v4/notify/notify";
import { RecordListMode } from "../../types/recordListMode";

export const UpdateRecordButton = ({
  record,
  setMode,
  afterHandler = () => undefined,
}: {
  record: Records[number];
  setMode: (mode: RecordListMode) => void;
  afterHandler?: () => void;
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
      afterHandler();
    } catch (e) {
      console.error(e);
      notify("レコード更新に失敗しました");
    }
  };

  return (
    <button onClick={updateHandler} className={"bg-inherit"}>
      <Floppy />
    </button>
  );
};

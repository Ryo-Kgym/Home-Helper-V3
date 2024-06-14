import { notify } from "@components/ui/v4/notify/notify";
import { RecordColumns } from "@oneforall/domain/schema/recordSchema";

import { useSaveNewRecord } from "./useSaveNewRecord";

export const SaveNewRecordButton = ({
  appId,
  columns,
}: {
  appId: string;
  columns: RecordColumns;
}) => {
  const { saveNewRecord } = useSaveNewRecord(appId);

  const saveRecordHandler = async () => {
    try {
      await saveNewRecord(columns);
      notify("レコードを追加しました");
    } catch (e) {
      console.error(e);
      notify("レコード追加に失敗しました");
    }
  };

  return (
    <button onClick={saveRecordHandler} className={"bg-inherit"}>
      追加
    </button>
  );
};

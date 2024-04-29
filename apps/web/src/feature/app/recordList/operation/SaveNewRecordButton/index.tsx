import { notify } from "@components/ui/v4/notify/notify";
import { Columns } from "@oneforall/domain/schema/recordSchema/recordSchema";

import { useSaveNewRecord } from "./useSaveNewRecord";

export const SaveNewRecordButton = ({
  appId,
  columns,
}: {
  appId: string;
  columns: Columns;
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

  return <button onClick={saveRecordHandler}>追加</button>;
};

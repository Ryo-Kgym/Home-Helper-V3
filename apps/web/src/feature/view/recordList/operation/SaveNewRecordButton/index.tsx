import { notify } from "@components/ui/v4/notify/notify";
import { Columns } from "@oneforall/domain/schema";

import { useSaveNewRecord } from "./useSaveNewRecord";

export const SaveNewRecordButton = ({
  viewId,
  columns,
}: {
  viewId: string;
  columns: Columns;
}) => {
  const { saveNewRecord } = useSaveNewRecord(viewId);

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

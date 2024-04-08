import { notify } from "@components/ui/v4/notify/notify";

import { useSaveNewRecord } from "./useSaveNewRecord";

import type { Columns } from "@feature/app/schema/record-schema";

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

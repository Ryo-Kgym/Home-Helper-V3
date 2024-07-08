import type { App } from "@oneforall/domain/schema/appSchema";
import { RecordListTableClient } from "@features/appRecordList/components/table/RecordListTableClient";
import { SwitchedRecords } from "@features/appRecordList/server/switchRecords";

export const RecordListTableServer = async ({
  app,
  headerItems,
  switchedRecords: { type, records },
}: {
  app: App;
  headerItems: { name: string }[];
  switchedRecords: SwitchedRecords;
}) => {
  return (
    <RecordListTableClient
      app={app}
      headerItems={headerItems}
      records={records}
      uneditable={type === "linkDatabase"}
    />
  );
};

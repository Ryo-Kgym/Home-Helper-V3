import type { App } from "@oneforall/domain/schema/appSchema";

import { SwitchedRecords } from "../../server/switchRecords";
import { RecordListTableClient } from "./RecordListTableClient";

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

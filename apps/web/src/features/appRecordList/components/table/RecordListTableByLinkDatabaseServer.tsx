import type { App } from "@oneforall/domain/schema/appSchema";
import { RecordListTableClient } from "@features/appRecordList/components/table/RecordListTableClient";
import { mapSqlRecordsToAppRecords } from "@oneforall/domain/convert/mapSqlRecordsToAppRecords";
import { LinkDatabase } from "@oneforall/domain/schema/linkDatabase/linkDatabaseSchema";
import { executeSql } from "@oneforall/domain/sql/execution";
import { getLookupRecords } from "@server/lookupRecords";

export const RecordListTableByLinkDatabaseServer = async ({
  app,
  headerItems,
  linkDatabase,
}: {
  app: App;
  headerItems: { name: string }[];
  linkDatabase: LinkDatabase;
}) => {
  const sqlRecord = await executeSql(linkDatabase);
  const lookupRecords = await getLookupRecords(app);
  const mappedRecords = mapSqlRecordsToAppRecords(
    sqlRecord,
    app.fields,
    linkDatabase.fieldColumnMaps,
    lookupRecords,
  );
  return (
    <RecordListTableClient
      app={app}
      headerItems={headerItems}
      records={mappedRecords}
      uneditable
    />
  );
};

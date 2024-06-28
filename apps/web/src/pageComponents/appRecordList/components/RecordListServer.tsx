import { mapSqlRecordsToAppRecords } from "@oneforall/domain/convert/mapSqlRecordsToAppRecords";
import { linkDatabaseSchema } from "@oneforall/domain/schema/linkDatabase/linkDatabaseSchema";
import { executeSql } from "@oneforall/domain/sql/execution";
import { RecordListClient } from "@pageComponents/appRecordList/components/RecordListClient";
import { makeColumnsTemplate } from "@pageComponents/appRecordList/server/makeColumnsTemplate";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { getLookupRecords } from "@server/lookupRecords";
import { parseToApp } from "@v3/graphql/public/convert/parseToApp";
import { parseToRecords } from "@v3/graphql/public/convert/parseToRecords";
import { GetAppDocument } from "@v3/graphql/public/type";

export const RecordListServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = parseToApp(data);
  const columnsTemplate = makeColumnsTemplate(app.fields);
  const headerItems = [
    { name: "No." },
    ...Object.values(app.fields).map((field) => ({
      name: field.fieldName,
    })),
    { name: "" },
  ];

  const linkDataBaseResult = linkDatabaseSchema.safeParse(
    data?.app?.linkDatabase,
  );

  if (linkDataBaseResult.success) {
    const sqlRecord = await executeSql(linkDataBaseResult.data);
    const lookupRecords = await getLookupRecords(app);
    const mappedRecords = mapSqlRecordsToAppRecords(
      sqlRecord,
      app.fields,
      linkDataBaseResult.data.fieldColumnMaps,
      lookupRecords,
    );

    return (
      <RecordListClient
        app={app}
        columnsTemplate={columnsTemplate}
        records={mappedRecords}
        headerItems={headerItems}
        uneditable
      />
    );
  }

  const records = parseToRecords(data?.app?.records ?? []);

  return (
    <RecordListClient
      app={app}
      columnsTemplate={columnsTemplate}
      records={records}
      headerItems={headerItems}
    />
  );
};

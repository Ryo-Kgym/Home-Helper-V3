import { RecordListClient } from "@pageComponents/appRecordList/components/RecordListClient";
import { makeColumnsTemplate } from "@pageComponents/appRecordList/server/makeColumnsTemplate";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToApp } from "@v3/graphql/public/convert/parseToApp";
import { parseToRecords } from "@v3/graphql/public/convert/parseToRecords";
import { GetAppDocument } from "@v3/graphql/public/type";

export const RecordListServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = parseToApp(data);
  const records = parseToRecords(data?.app?.records ?? []);

  const columnsTemplate = makeColumnsTemplate(app.fields);

  const headerItems = [
    { name: "No." },
    ...Object.values(app.fields).map((field) => ({
      name: field.fieldName,
    })),
    { name: "" },
  ];

  return (
    <RecordListClient
      app={app}
      columnsTemplate={columnsTemplate}
      records={records}
      headerItems={headerItems}
    />
  );
};

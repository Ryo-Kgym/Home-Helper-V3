import { convertToApp } from "@feature/app/recordList/convertToApp";
import { convertToRecords } from "@feature/app/recordList/convertToRecords";
import { makeColumnsTemplate } from "@feature/app/recordList/makeColumnsTemplate";
import { RecordListClient } from "@feature/app/recordList/RecordListClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetAppDocument } from "@v3/graphql/public/type";

export const RecordListServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = convertToApp(data);
  const records = convertToRecords(data?.app?.records ?? []);

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

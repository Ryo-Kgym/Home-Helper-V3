import { convertToApp } from "@feature/app/recordList/convert-to-app";
import { convertToRecords } from "@feature/app/recordList/convert-to-records";
import { makeColumnsTemplate } from "@feature/app/recordList/make-columns-template";
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

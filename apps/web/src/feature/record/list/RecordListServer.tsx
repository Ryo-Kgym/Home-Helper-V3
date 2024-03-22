import { makeRecordTemplate } from "@feature/app/schema/make-record-template";
import { convertToApp } from "@feature/record/list/convert-to-app";
import { convertToRecords } from "@feature/record/list/convert-to-records";
import { RecordListClient } from "@feature/record/list/RecordListClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetAppDocument } from "@v3/graphql/public/type";

export const RecordListServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = convertToApp(data);
  const records = convertToRecords(data?.app?.records ?? []);

  const recordTemplate = makeRecordTemplate(app.fields);

  return (
    <RecordListClient
      app={app}
      recordTemplate={recordTemplate}
      records={records}
    />
  );
};

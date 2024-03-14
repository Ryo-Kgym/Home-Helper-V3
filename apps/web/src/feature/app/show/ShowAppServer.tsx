import { makeRecordTemplate } from "@feature/app/schema/make-record-template";
import { convertToApp } from "@feature/app/show/convert-to-app";
import { convertToRecords } from "@feature/app/show/convert-to-records";
import { ShowAppClient } from "@feature/app/show/ShowAppClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetAppDocument } from "@v3/graphql/public/type";

export const ShowAppServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = convertToApp(data);
  const records = convertToRecords(data?.app?.records ?? []);

  const recordTemplate = makeRecordTemplate(app.fields);

  return (
    <ShowAppClient
      app={app}
      recordTemplate={recordTemplate}
      records={records}
    />
  );
};

import { convertToApp } from "@feature/record/list/convert-to-app";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetAppDocument } from "@v3/graphql/public/type";

import { RecordImportClient } from "./RecordImportClient";

export const RecordImportServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = convertToApp(data);

  return <RecordImportClient app={app} />;
};

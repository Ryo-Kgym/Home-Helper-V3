import { convertToApp } from "@feature/app/show/convert-to-app";
import { ShowAppClient } from "@feature/app/show/ShowAppClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetAppDocument } from "@v3/graphql/public/type";

export const ShowAppServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = await convertToApp(data);

  return <ShowAppClient app={app} />;
};

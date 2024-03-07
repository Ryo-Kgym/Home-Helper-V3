import { ShowAppClient } from "@feature/app/show/ShowAppClient";

export const ShowAppServer = async ({ appId }: { appId: string }) => {
  appId;
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const fields = JSON.parse(data?.app?.fields ?? "{}");

  return <ShowAppClient />;
};

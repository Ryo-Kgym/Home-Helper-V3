import { EditAppClient } from "@feature/app/edit/EditAppClient";
import { convertToApp } from "@feature/app/show/convert-to-app";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetAppDocument } from "@v3/graphql/public/type";

export const EditAppServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = convertToApp(data);

  const fields = Object.fromEntries(
    Object.values(app.fields).map((f) => [
      f.fieldIndex,
      {
        fieldName: f.fieldName,
        fieldKind: f.fieldKind,
        options: f.options as Record<string, never>,
      },
    ]),
  );

  return <EditAppClient appName={app.name} fields={fields} />;
};

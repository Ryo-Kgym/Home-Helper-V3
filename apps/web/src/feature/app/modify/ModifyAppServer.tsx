import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { ModifyAppClient } from "@feature/app/modify/ModifyAppClient";
import { convertToApp } from "@feature/app/show/convert-to-app";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetAppDocument } from "@v3/graphql/public/type";

export const ModifyAppServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = convertToApp(data);

  const fields = Object.fromEntries(
    Object.values(app.fields).map((f) => [
      f.fieldIndex,
      {
        fieldName: f.fieldName,
        fieldKind: f.fieldKind,
        options: f.options,
        mode: "modify",
      },
    ]),
  ) as AppFieldValue;

  return <ModifyAppClient appId={appId} appName={app.name} fields={fields} />;
};

import type { AppFieldValue } from "@feature/app/create/appFieldValue";
import { convertToApp } from "@oneforall/domain/convert/convertToApp";
import { ModifyAppClient } from "@pageComponents/appModify/components/ModifyAppClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetAppDocument } from "@v3/graphql/public/type";

export const ModifyAppServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = convertToApp(data);

  const fields = Object.fromEntries(
    Object.entries(app.fields).map(([id, f]) => [
      f.fieldIndex,
      {
        fieldName: f.fieldName,
        fieldKind: f.fieldKind,
        options: f.options,
        id,
        mode: "modify",
      },
    ]),
  ) as AppFieldValue;

  return <ModifyAppClient appId={appId} appName={app.name} fields={fields} />;
};

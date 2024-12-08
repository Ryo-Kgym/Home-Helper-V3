import { AppFieldValue } from "@oneforall/domain/schema/appFieldValue";
import { parseToApp } from "@v3/graphql/public/convert/parseToApp";
import { GetAppDocument } from "@v3/graphql/public/type";

import { fetchQuery } from "~/persistence/database/server/fetchQuery";
import { ModifyAppClient } from "./ModifyAppClient";

export const ModifyAppServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = parseToApp(data);

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

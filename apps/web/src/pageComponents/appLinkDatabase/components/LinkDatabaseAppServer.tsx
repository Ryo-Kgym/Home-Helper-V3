import { FC } from "react";
import { Fields } from "@oneforall/domain/schema/appSchema";
import {
  LinkDatabase,
  linkDatabaseSchema,
} from "@oneforall/domain/schema/linkDatabase/linkDatabaseSchema";
import { parseToFields } from "@v3/graphql/public/convert/parseToFields";
import { GetAppLinkDatabaseDocument } from "@v3/graphql/public/type";

import { fetchQuery } from "~/persistence/database/server/fetchQuery";
import { LinkDatabaseAppClient } from "./LinkDatabaseAppClient";

export const LinkDatabaseAppServer: FC<{ appId: string }> = async ({
  appId,
}) => {
  const { data } = await fetchQuery(GetAppLinkDatabaseDocument, { appId });
  const linkDataBaseResult = linkDatabaseSchema.safeParse(data?.linkDatabase);

  const defaultLinkDatabase: LinkDatabase = linkDataBaseResult.success
    ? linkDataBaseResult.data
    : {
        database: "neon",
        connection: {
          endpoint: "",
        },
        sql: "",
        parameters: {},
        fieldColumnMaps: {},
      };

  const fields: Fields = parseToFields(data.fields);

  return (
    <LinkDatabaseAppClient
      appId={appId}
      defaultLinkDatabase={defaultLinkDatabase}
      fields={fields}
    />
  );
};

import { mapSqlRecordsToAppRecords } from "@oneforall/domain/convert/mapSqlRecordsToAppRecords";
import { App } from "@oneforall/domain/schema/appSchema";
import { linkDatabaseSchema } from "@oneforall/domain/schema/linkDatabase/linkDatabaseSchema";
import { Records } from "@oneforall/domain/schema/recordSchema";
import { executeSql } from "@oneforall/domain/sql/execution";
import { getLookupRecords } from "@server/lookupRecords";
import { parseToRecords } from "@v3/graphql/public/convert/parseToRecords";
import { GetAppQuery } from "@v3/graphql/public/type";

export type SwitchedRecords = {
  type: "linkDatabase" | "records";
  records: Records;
};

export const switchRecords = async (
  app: App,
  data: {
    linkDatabase: NonNullable<NonNullable<GetAppQuery>["app"]>["linkDatabase"];
    records: NonNullable<NonNullable<GetAppQuery>["app"]>["records"];
  },
): Promise<SwitchedRecords> => {
  const linkDataBaseResult = linkDatabaseSchema.safeParse(data.linkDatabase);

  if (linkDataBaseResult.success) {
    const sqlRecord = await executeSql(linkDataBaseResult.data);
    const lookupRecords = await getLookupRecords(app);
    return {
      type: "linkDatabase",
      records: mapSqlRecordsToAppRecords(
        sqlRecord,
        app.fields,
        data.linkDatabase?.fieldColumnMaps,
        lookupRecords,
      ),
    };
  }

  return {
    type: "records",
    records: parseToRecords(data?.records ?? []),
  };
};

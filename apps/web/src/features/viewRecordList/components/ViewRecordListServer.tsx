import { recordFiltersSchema } from "@oneforall/domain/schema/filter/recordFiltersSchema";
import { View } from "@oneforall/domain/schema/view/viewSchema";
import { parseToApp } from "@v3/graphql/public/convert/parseToApp";
import { parseToViewRecords } from "@v3/graphql/public/convert/parseToViewRecords";
import { GetViewRecordsSourceQuery } from "@v3/graphql/public/type";

import { switchRecords } from "../../appRecordList/server/switchRecords";
import { ViewRecordListClient } from "./ViewRecordListClient";

export const ViewRecordListServer = async ({
  view,
  viewData,
  filterStr,
}: {
  view: View;
  viewData: NonNullable<GetViewRecordsSourceQuery>["view"];
  filterStr: string | undefined;
}) => {
  const headerItems = [
    { name: "No." },
    ...Object.values(view.fields)
      .sort((a, b) => a.fieldIndex - b.fieldIndex)
      .map((field) => ({
        name: field.fieldName,
      })),
    { name: "アプリ名" },
  ];

  const viewFilters = recordFiltersSchema.safeParse(
    JSON.parse(filterStr ?? "{}"),
  ).data;

  const records = parseToViewRecords(
    view.fields,
    await Promise.all(
      viewData?.viewApps.map(async (viewApp) => {
        const { records } = await switchRecords(parseToApp(viewApp), {
          linkDatabase: viewApp.app.linkDatabase,
          records: viewApp.app.records,
        });

        return {
          id: viewApp.id,
          app: {
            id: viewApp.app.id,
            name: viewApp.app.name,
            records: Object.values(records),
          },
          viewAppFields: viewApp.fields,
        };
      }) ?? [],
    ),
    viewFilters,
  );

  return (
    <ViewRecordListClient
      view={view}
      records={records}
      headerItems={headerItems}
    />
  );
};

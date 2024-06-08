import { viewFiltersSchema } from "@oneforall/domain/schema/view/viewFilterSchema";
import { ViewRecordListClient } from "@pageComponents/viewRecordList/components/ViewRecordListClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToView } from "@v3/graphql/public/convert/parseToView";
import { parseToViewRecords } from "@v3/graphql/public/convert/parseToViewRecords";
import { GetViewRecordsSourceDocument } from "@v3/graphql/public/type";

export const ViewRecordListServer = async ({
  viewId,
  filterStr,
}: {
  viewId: string;
  filterStr: string | undefined;
}) => {
  const { data } = await fetchQuery(GetViewRecordsSourceDocument, {
    viewId,
  });

  const view = parseToView(data.view);

  const headerItems = [
    { name: "No." },
    ...Object.values(view.fields)
      .sort((a, b) => a.fieldIndex - b.fieldIndex)
      .map((field) => ({
        name: field.fieldName,
      })),
    { name: "アプリ名" },
  ];

  const viewFilters = viewFiltersSchema.safeParse(
    JSON.parse(filterStr ?? "{}"),
  ).data;

  const records = parseToViewRecords(
    view.fields,
    data.view?.viewApps ?? [],
    viewFilters,
  );
  return (
    <ViewRecordListClient
      view={view}
      records={records}
      viewFilters={viewFilters}
      headerItems={headerItems}
    />
  );
};

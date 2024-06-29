import { ViewRecordListClient } from "@features/viewRecordList/components/ViewRecordListClient";
import { recordFiltersSchema } from "@oneforall/domain/schema/filter/recordFiltersSchema";
import { View } from "@oneforall/domain/schema/view/viewSchema";
import { parseToViewRecords } from "@v3/graphql/public/convert/parseToViewRecords";
import { GetViewRecordsSourceQuery } from "@v3/graphql/public/type";

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
    viewData?.viewApps ?? [],
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

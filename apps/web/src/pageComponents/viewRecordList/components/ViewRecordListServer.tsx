import { Fields } from "@oneforall/domain/schema/appSchema";
import { recordFiltersSchema } from "@oneforall/domain/schema/filter/recordFiltersSchema";
import { Record } from "@oneforall/domain/schema/recordSchema";
import { ViewRecord } from "@oneforall/domain/schema/view/viewRecordSchema";
import { AppRecordDetailClient } from "@pageComponents/viewRecordList/components/AppRecordDetailClient";
import { ViewRecordListClient } from "@pageComponents/viewRecordList/components/ViewRecordListClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToFields } from "@v3/graphql/public/convert/parseToFields";
import { parseToRecords } from "@v3/graphql/public/convert/parseToRecords";
import { parseToView } from "@v3/graphql/public/convert/parseToView";
import { parseToViewRecords } from "@v3/graphql/public/convert/parseToViewRecords";
import {
  GetViewRecordsSourceDocument,
  GetViewRecordsSourceQuery,
} from "@v3/graphql/public/type";

export const ViewRecordListServer = async ({
  viewId,
  filterStr,
  appId_RecordId,
}: {
  viewId: string;
  filterStr: string | undefined;
  appId_RecordId: string | undefined; // appId-recordId
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

  const viewFilters = recordFiltersSchema.safeParse(
    JSON.parse(filterStr ?? "{}"),
  ).data;

  const records = parseToViewRecords(
    view.fields,
    data.view?.viewApps ?? [],
    viewFilters,
  );

  return (
    <>
      <ViewRecordListClient
        view={view}
        records={records}
        viewFilters={viewFilters}
        headerItems={headerItems}
      />
      <AppRecordDetailClient
        {...extractApp(records[appId_RecordId ?? ""], data)}
        existsRecordId={!!appId_RecordId}
      />
    </>
  );
};

const extractApp = (
  viewRecord: ViewRecord | undefined,
  data: GetViewRecordsSourceQuery,
): {
  fields: Fields;
  record: Record | undefined;
} => {
  if (!viewRecord) return { fields: {}, record: undefined };

  const { viewAppId, recordId } = viewRecord;
  const app = data.view?.viewApps.find((va) => va.id === viewAppId)?.app;

  return {
    fields: parseToFields(app?.fields ?? []),
    record: Object.values(parseToRecords(app?.records ?? [])).find(
      (r) => r.recordId === recordId,
    ),
  };
};

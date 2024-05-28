import { convertToViewRecords } from "@features/viewRecordList/server/convertToViewRecords";
import { ViewRecordListClient } from "@pageComponents/viewRecordList/components/ViewRecordListClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToView } from "@v3/graphql/public/convert/parseToView";
import { GetViewRecordsSourceDocument } from "@v3/graphql/public/type";

export const ViewRecordListServer = async ({ viewId }: { viewId: string }) => {
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

  const records = convertToViewRecords(view.fields, data.view?.viewApps ?? []);

  return (
    <ViewRecordListClient
      view={view}
      records={records}
      headerItems={headerItems}
    />
  );
};

import { convertToView } from "@feature/view/recordList/convertToView";
import { convertToViewRecords } from "@feature/view/recordList/convertToViewRecords";
import { ViewRecordListClient } from "@feature/view/recordList/ViewRecordListClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import {
  GetViewDocument,
  GetViewRecordsSourceDocument,
} from "@v3/graphql/public/type";

export const ViewRecordListServer = async ({ viewId }: { viewId: string }) => {
  const { data } = await fetchQuery(GetViewDocument, { viewId });
  const { data: recordsSource } = await fetchQuery(
    GetViewRecordsSourceDocument,
    { viewId },
  );

  const view = convertToView(data);

  const headerItems = [
    { name: "No." },
    ...Object.values(view.fields).map((field) => ({
      name: field.fieldName,
    })),
    { name: "アプリ名" },
  ];

  const records = convertToViewRecords(recordsSource);

  return (
    <ViewRecordListClient
      view={view}
      records={records}
      headerItems={headerItems}
    />
  );
};

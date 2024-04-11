import { convertToView } from "@feature/view/recordList/convert-to-app";
import { RecordListClient } from "@feature/view/recordList/RecordListClient";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetViewDocument } from "@v3/graphql/public/type";

export const RecordListServer = async ({ viewId }: { viewId: string }) => {
  const { data } = await fetchQuery(GetViewDocument, { viewId });
  const view = convertToView(data);

  const headerItems = [
    { name: "No." },
    ...Object.values(view.fields).map((field) => ({
      name: field.fieldName,
    })),
    { name: "" },
  ];

  return (
    <RecordListClient view={view} records={{}} headerItems={headerItems} />
  );
};

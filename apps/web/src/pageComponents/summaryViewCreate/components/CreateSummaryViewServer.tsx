import { convertToViewRecords } from "@features/viewRecordList/server/convertToViewRecords";
import { ViewRecords } from "@oneforall/domain/schema/view/viewRecordSchema";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToView } from "@v3/graphql/public/convert/parseToView";
import { GetViewRecordsSourceDocument } from "@v3/graphql/public/type";

import { CreateSummaryViewClient } from "./CreateSummaryViewClient";

export const CreateSummaryViewServer = async ({
  viewId,
}: {
  viewId: string;
}) => {
  const { data } = await fetchQuery(GetViewRecordsSourceDocument, {
    viewId,
  });

  const view = parseToView(data.view);

  const records: ViewRecords = convertToViewRecords(
    view.fields,
    data.view?.viewApps ?? [],
  );
  records;

  return <CreateSummaryViewClient />;
};

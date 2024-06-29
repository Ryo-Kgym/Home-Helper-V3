import { ViewRecords } from "@oneforall/domain/schema/view/viewRecordSchema";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToView } from "@v3/graphql/public/convert/parseToView";
import { parseToViewRecords } from "@v3/graphql/public/convert/parseToViewRecords";
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

  const records: ViewRecords = parseToViewRecords(
    view.fields,
    [], // TODO
  );
  records;

  return <CreateSummaryViewClient />;
};

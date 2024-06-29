import { NoData } from "@components/ui/v4/NoData";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { parseToFields } from "@v3/graphql/public/convert/parseToFields";
import { parseToRecords } from "@v3/graphql/public/convert/parseToRecords";
import { GetRecordDocument } from "@v3/graphql/public/type";

import { AppRecordDetailClient } from "./AppRecordDetailClient";

export const AppRecordDetailServer = async ({
  recordId,
}: {
  recordId: string;
}) => {
  const { data } = await fetchQuery(GetRecordDocument, {
    recordId,
  });

  if (!data.record) {
    return <NoData />;
  }

  const record = Object.values(parseToRecords([data.record]))[0];

  if (!record) {
    return <NoData />;
  }

  return (
    <AppRecordDetailClient
      fields={parseToFields(data.record?.app.fields ?? [])}
      record={record}
    />
  );
};

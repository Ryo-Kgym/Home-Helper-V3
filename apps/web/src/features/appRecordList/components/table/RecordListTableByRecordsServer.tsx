import type { App } from "@oneforall/domain/schema/appSchema";
import { RecordListTableClient } from "@features/appRecordList/components/table/RecordListTableClient";
import { parseToRecords } from "@v3/graphql/public/convert/parseToRecords";
import { GetAppQuery } from "@v3/graphql/public/type";

export const RecordListTableByRecordsServer = async ({
  app,
  headerItems,
  recordsData,
}: {
  app: App;
  headerItems: { name: string }[];
  recordsData:
    | NonNullable<NonNullable<GetAppQuery>["app"]>["records"]
    | undefined;
}) => {
  const records = parseToRecords(recordsData ?? []);

  return (
    <RecordListTableClient
      app={app}
      headerItems={headerItems}
      records={records}
    />
  );
};

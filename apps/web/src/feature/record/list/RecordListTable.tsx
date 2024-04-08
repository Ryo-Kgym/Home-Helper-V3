import { Table } from "@components/ui/v4/table";
import { NewRecordListRow } from "@feature/record/list/NewRecordListRow";
import { RecordListRow } from "@feature/record/list/RecordListRow";
import { useRecords } from "@feature/record/list/useRecordsState";

import type { App } from "@feature/app/schema";
import type { ComponentProps } from "react";

export const RecordListTable = ({
  app,
  headerItems,
}: {
  app: App;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
}) => {
  const { records } = useRecords();

  return (
    <Table>
      <Table.Header headerItems={headerItems} />
      <Table.Body
        data={Object.entries(records)}
        renderItem={([recordIndex, record]) => (
          <RecordListRow
            key={record.recordId}
            record={record}
            recordIndex={parseInt(recordIndex)}
            app={app}
          />
        )}
      >
        <NewRecordListRow app={app} />
      </Table.Body>
    </Table>
  );
};

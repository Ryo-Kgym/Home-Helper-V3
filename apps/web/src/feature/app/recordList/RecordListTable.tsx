import type { ComponentProps } from "react";
import { Table } from "@components/ui/v4/table";
import { NewRecordListRow } from "@feature/app/recordList/NewRecordListRow";
import { RecordListRow } from "@feature/app/recordList/RecordListRow";
import { useRecords } from "@feature/app/recordList/useRecordsState";
import type { App } from "@oneforall/domain/schema";

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

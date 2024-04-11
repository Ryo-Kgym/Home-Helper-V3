import type { ComponentProps } from "react";
import { Table } from "@components/ui/v4/table";
import { NewRecordListRow } from "@feature/view/recordList/NewRecordListRow";
import { RecordListRow } from "@feature/view/recordList/RecordListRow";
import { useRecords } from "@feature/view/recordList/useRecordsState";
import type { View } from "@oneforall/domain/schema";

export const RecordListTable = ({
  view,
  headerItems,
}: {
  view: View;
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
            view={view}
          />
        )}
      >
        <NewRecordListRow view={view} />
      </Table.Body>
    </Table>
  );
};

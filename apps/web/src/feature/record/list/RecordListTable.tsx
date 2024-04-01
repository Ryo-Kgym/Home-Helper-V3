import type { App, Columns } from "@feature/app/schema";
import type { ComponentProps } from "react";
import { useState } from "react";
import { Table } from "@components/ui/v4/table";
import { RecordListRow } from "@feature/record/list/RecordListRow";
import { useRecords } from "@feature/record/list/useRecordsState";

export const RecordListTable = ({
  app,
  headerItems,
  columnsTemplate,
}: {
  app: App;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
  columnsTemplate: Columns;
}) => {
  const { records } = useRecords();
  const [newColumns, setNewColumns] = useState<Columns>(columnsTemplate);

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
            newRecord={newColumns}
            setNewRecord={setNewColumns}
            app={app}
            columnsTemplate={columnsTemplate}
          />
        )}
      ></Table.Body>
    </Table>
  );
};

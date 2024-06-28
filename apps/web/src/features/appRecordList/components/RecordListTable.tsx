import type { App } from "@oneforall/domain/schema/appSchema";
import type { ComponentProps } from "react";
import { Table } from "@components/ui/v4/table";
import { NewRecordListRowClient } from "@features/appRecordList/components/NewRecordListRowClient";
import { RecordListRowClient } from "@features/appRecordList/components/RecordListRowClient";
import { useRecords } from "@hooks/states/app/records/useRecords";

export const RecordListTable = ({
  app,
  headerItems,
  uneditable,
}: {
  app: App;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
  uneditable?: boolean;
}) => {
  const { records } = useRecords();

  return (
    <Table>
      <Table.Header headerItems={headerItems} />
      <Table.Body
        data={Object.entries(records)}
        renderItem={([recordIndex, record]) => (
          <RecordListRowClient
            key={record.recordId}
            record={record}
            recordIndex={parseInt(recordIndex)}
            app={app}
            uneditable={uneditable}
          />
        )}
      >
        <NewRecordListRowClient app={app} />
      </Table.Body>
    </Table>
  );
};

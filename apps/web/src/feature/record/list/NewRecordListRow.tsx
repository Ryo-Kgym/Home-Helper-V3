import type { App, Columns, Record } from "@feature/app/schema";
import { useState } from "react";
import { Table } from "@components/ui/v4/table";
import { AddCell } from "@feature/record/list/cell/AddCell";
import { AddRecordRowOperation } from "@feature/record/list/operation/AddRecordRowOperation";

export const NewRecordListRow = ({
  recordIndex,
  newRecord,
  setNewRecord,
  app,
  columnsTemplate,
}: {
  record: Record;
  recordIndex: number;
  newRecord: Columns;
  setNewRecord: (record: Columns) => void;
  app: App;
  columnsTemplate: Columns;
}) => {
  const [record] = useState<Record>({
    recordId: "9",
    isEditing: false,
    columns: columnsTemplate,
  });

  return (
    <Table.BodyTr>
      <Table.BodyTd align={"right"}>{recordIndex}</Table.BodyTd>
      {Object.values(app.fields).map((field) => (
        <Table.BodyTd key={field.id}>
          <AddCell
            fields={app.fields}
            field={field}
            newRecord={newRecord}
            setNewRecord={setNewRecord}
            column={record.columns[field.id]}
          />
        </Table.BodyTd>
      ))}
      <Table.BodyTd>
        <AddRecordRowOperation
          record={record}
          newRecord={newRecord}
          setNewRecord={setNewRecord}
          columnsTemplate={columnsTemplate}
          appId={app.id}
        />
      </Table.BodyTd>
    </Table.BodyTr>
  );
};

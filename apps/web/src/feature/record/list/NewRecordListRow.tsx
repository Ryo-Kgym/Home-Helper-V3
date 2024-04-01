import type { App } from "@feature/app/schema";
import { Table } from "@components/ui/v4/table";
import { AddCell } from "@feature/record/list/cell/AddCell";
import { AddRecordRowOperation } from "@feature/record/list/operation/AddRecordRowOperation";
import { useNewRecord } from "@feature/record/list/operation/useNewRecordState";

export const NewRecordListRow = ({
  recordIndex,
  app,
}: {
  recordIndex: number;
  app: App;
}) => {
  const { record, setRecord } = useNewRecord();

  return (
    <Table.BodyTr>
      <Table.BodyTd align={"right"}>{recordIndex}</Table.BodyTd>
      {Object.values(app.fields).map((field) => (
        <Table.BodyTd key={field.id}>
          <AddCell
            fields={app.fields}
            field={field}
            columns={record.columns}
            setColumns={(columns) => setRecord({ ...record, columns })}
            column={record.columns[field.id]}
          />
        </Table.BodyTd>
      ))}
      <Table.BodyTd>
        <AddRecordRowOperation columns={record.columns} appId={app.id} />
      </Table.BodyTd>
    </Table.BodyTr>
  );
};

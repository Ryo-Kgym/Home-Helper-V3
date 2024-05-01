import { Table } from "@components/ui/v4/table";
import { AddCell } from "@features/appRecordList/components/cell/AddCell";
import { AddRecordRowOperation } from "@features/appRecordList/components/operation/AddRecordRowOperation";
import { useNewRecord } from "@hooks/states/app/record/useNewRecord";
import { useRecordListMode } from "@hooks/states/app/recordListMode/useRecordListMode";
import { App } from "@oneforall/domain/schema/appSchema";

export const NewRecordListRowClient = ({ app }: { app: App }) => {
  const { record, setRecord } = useNewRecord();
  const { mode } = useRecordListMode();

  if (mode !== "add") return null;

  return (
    <Table.BodyTr>
      <Table.BodyTd align={"right"}>{""}</Table.BodyTd>
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

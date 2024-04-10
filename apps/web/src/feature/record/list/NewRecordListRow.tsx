import { Table } from "@components/ui/v4/table";
import { AddCell } from "@feature/record/list/cell/AddCell";
import { AddRecordRowOperation } from "@feature/record/list/operation/AddRecordRowOperation";
import { useNewRecord } from "@feature/record/list/operation/useNewRecordState";
import { App } from "@oneforall/domain/schema";

import { useMode } from "./useModeState";

export const NewRecordListRow = ({ app }: { app: App }) => {
  const { record, setRecord } = useNewRecord();
  const { mode } = useMode();

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

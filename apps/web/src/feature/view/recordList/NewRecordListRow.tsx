import { Table } from "@components/ui/v4/table";
import { AddCell } from "@feature/view/recordList/cell/AddCell";
import { AddRecordRowOperation } from "@feature/view/recordList/operation/AddRecordRowOperation";
import { useNewRecord } from "@feature/view/recordList/operation/useNewRecordState";
import { View } from "@oneforall/domain/schema";

import { useMode } from "./useModeState";

export const NewRecordListRow = ({ view }: { view: View }) => {
  const { record, setRecord } = useNewRecord();
  const { mode } = useMode();

  if (mode !== "add") return null;

  return (
    <Table.BodyTr>
      <Table.BodyTd align={"right"}>{""}</Table.BodyTd>
      {Object.values(view.fields).map((field) => (
        <Table.BodyTd key={field.id}>
          <AddCell
            fields={view.fields}
            field={field}
            columns={record.columns}
            setColumns={(columns) => setRecord({ ...record, columns })}
            column={record.columns[field.id]}
          />
        </Table.BodyTd>
      ))}
      <Table.BodyTd>
        <AddRecordRowOperation columns={record.columns} viewId={view.id} />
      </Table.BodyTd>
    </Table.BodyTr>
  );
};

import { useState } from "react";
import { Table } from "@components/ui/v4/table";
import { RecordCell } from "@feature/view/recordList/cell/RecordCell";
import { RecordRowOperation } from "@feature/view/recordList/operation/RecordRowOperation";
import { RecordListMode } from "@feature/view/recordList/RecordListClient";
import { useStateRecord } from "@feature/view/recordList/useStateRecord";
import { Records, View } from "@oneforall/domain/schema";

export const RecordListRow = ({
  record: defaultRecord,
  recordIndex,
  view,
}: {
  record: Records[number];
  recordIndex: number;
  view: View;
}) => {
  const { record, setRecord } = useStateRecord(defaultRecord);
  const [mode, setMode] = useState<RecordListMode>("show");

  return (
    <>
      <Table.BodyTd align={"right"}>{recordIndex}</Table.BodyTd>
      {Object.values(view.fields).map((field) => (
        <Table.BodyTd key={field.id}>
          <RecordCell
            record={record}
            field={field}
            mode={mode}
            column={record.columns[field.id]}
            setRecord={setRecord}
          />
        </Table.BodyTd>
      ))}
      <Table.BodyTd>
        <RecordRowOperation
          record={record}
          mode={mode}
          setMode={setMode}
          recordId={record.recordId}
          setRecord={setRecord}
          defaultRecord={defaultRecord}
        />
      </Table.BodyTd>
    </>
  );
};

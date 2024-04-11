import { useState } from "react";
import { Table } from "@components/ui/v4/table";
import { RecordCell } from "@feature/app/recordList/cell/RecordCell";
import { RecordRowOperation } from "@feature/app/recordList/operation/RecordRowOperation";
import { RecordListMode } from "@feature/app/recordList/RecordListClient";
import { useStateRecord } from "@feature/app/recordList/useStateRecord";
import { App, Records } from "@oneforall/domain/schema";

export const RecordListRow = ({
  record: defaultRecord,
  recordIndex,
  app,
}: {
  record: Records[number];
  recordIndex: number;
  app: App;
}) => {
  const { record, setRecord } = useStateRecord(defaultRecord);
  const [mode, setMode] = useState<RecordListMode>("show");

  return (
    <>
      <Table.BodyTd align={"right"}>{recordIndex}</Table.BodyTd>
      {Object.values(app.fields).map((field) => (
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

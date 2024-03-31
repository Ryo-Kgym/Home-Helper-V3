import type { App, Columns, Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import { useState } from "react";
import { Table } from "@components/ui/v4/table";
import { RecordCell } from "@feature/record/list/cell/RecordCell";
import { RecordRowOperation } from "@feature/record/list/operation/RecordRowOperation";
import { useStateRecord } from "@feature/record/list/useStateRecord";

export const NewRecordListRow = ({
  record: defaultRecord,
  recordIndex,
  newRecord,
  setNewRecord,
  app,
  records,
  setRecords,
  recordTemplate,
}: {
  record: Records[number];
  recordIndex: number;
  newRecord: Columns;
  setNewRecord: (record: Columns) => void;
  app: App;
  records: Records;
  setRecords: (records: Records) => void;
  recordTemplate: Columns;
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
            fields={app.fields}
            field={field}
            newRecord={newRecord}
            setNewRecord={setNewRecord}
            mode={mode}
            column={record.columns[field.id]}
            setRecord={setRecord}
          />
        </Table.BodyTd>
      ))}
      <Table.BodyTd>
        <RecordRowOperation
          record={record}
          records={records}
          setRecords={setRecords}
          newRecord={newRecord}
          setNewRecord={setNewRecord}
          mode={mode}
          setMode={setMode}
          columnsTemplate={recordTemplate}
          appId={app.id}
          recordId={record.recordId}
          setRecord={setRecord}
          defaultRecord={defaultRecord}
        />
      </Table.BodyTd>
    </>
  );
};

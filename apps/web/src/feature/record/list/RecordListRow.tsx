import type { App, Record, Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import { Table } from "@components/ui/v4/table";
import { RecordCell } from "@feature/record/list/cell/RecordCell";
import { RecordRowOperation } from "@feature/record/list/operation/RecordRowOperation";

export const RecordListRow = ({
  record,
  recordIndex,
  newRecord,
  setNewRecord,
  app,
  records,
  setRecords,
  mode,
  setMode,
  recordTemplate,
  defaultRecords,
}: {
  record: Records[number];
  recordIndex: number;
  newRecord: Record;
  setNewRecord: (record: Record) => void;
  app: App;
  records: Records;
  setRecords: (records: Records) => void;
  mode: RecordListMode;
  setMode: (mode: RecordListMode) => void;
  recordTemplate: Record;
  defaultRecords: Records;
}) => (
  <>
    <Table.BodyTd align={"right"}>{recordIndex}</Table.BodyTd>
    {Object.values(app.fields).map((field) => (
      <Table.BodyTd key={field.id}>
        <RecordCell
          recordIndex={recordIndex}
          fieldId={field.id}
          fields={app.fields}
          field={field}
          isEditing={record.isEditing}
          newRecord={newRecord}
          setNewRecord={setNewRecord}
          mode={mode}
          records={records}
          setRecords={setRecords}
          column={record.columns[field.id]!}
          options={field.options}
        />
      </Table.BodyTd>
    ))}
    <Table.BodyTd>
      <RecordRowOperation
        recordIndex={recordIndex}
        record={record}
        records={records}
        setRecords={setRecords}
        newRecord={newRecord}
        setNewRecord={setNewRecord}
        mode={mode}
        setMode={setMode}
        recordTemplate={recordTemplate}
        appId={app.id}
        defaultRecords={defaultRecords}
        recordId={record.recordId}
      />
    </Table.BodyTd>
  </>
);

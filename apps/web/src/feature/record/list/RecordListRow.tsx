import type { App, Record, Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
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
}) => {
  return (
    <tr className={"border border-gray-300"}>
      <td className={"border border-gray-300 p-2"}>{recordIndex}</td>
      {Object.entries(app.fields).map(([, field]) => (
        <td key={field.id} className={"border border-gray-300 p-2"}>
          <RecordCell
            recordIndex={recordIndex}
            record={record}
            fieldId={field.id}
            fields={app.fields}
            isEditing={record.isEditing}
            newRecord={newRecord}
            setNewRecord={setNewRecord}
            mode={mode}
            records={records}
            setRecords={setRecords}
            column={record.columns[field.id]!}
          />
        </td>
      ))}
      <td className={"space-x-2 border border-gray-300 p-2"}>
        <div>
          isEditing: {record.isEditing ? "T" : "F"}, mode: {mode}
        </div>
        <RecordRowOperation
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
      </td>
    </tr>
  );
};

import type { App, Record, Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import { RecordRowOperation } from "@feature/record/list/operation/RecordRowOperation";
import { RecordCell } from "@feature/record/list/RecordCell";

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
}) => {
  return (
    <tr className={"border border-gray-300"}>
      <td className={"border border-gray-300 p-2"}>{recordIndex}</td>
      {Object.entries(app.fields).map(([, field]) => (
        <td key={field.id} className={"border border-gray-300 p-2"}>
          <RecordCell
            fieldId={field.id}
            fields={app.fields}
            isEditing={record.isEditing}
            column={record.columns[field.id]}
            newRecord={newRecord}
            setNewRecord={setNewRecord}
            mode={mode}
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
        />
      </td>
    </tr>
  );
};

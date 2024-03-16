import type { App, Record, Records } from "@feature/app/schema";
import { DeleteRecordButton } from "@feature/record/list/DeleteRecordButton";
import { RecordCell } from "@feature/record/list/RecordCell";
import { SaveRecordButton } from "@feature/record/list/SaveRecordButton";

export const RecordListRow = ({
  record,
  recordIndex,
  newRecord,
  setNewRecord,
  app,
  records,
  setRecords,
  addingRecord,
  setAddingRecord,
  recordTemplate,
}: {
  record: Records[number];
  recordIndex: number;
  newRecord: Record;
  setNewRecord: (record: Record) => void;
  app: App;
  records: Records;
  setRecords: (records: Records) => void;
  addingRecord: boolean;
  setAddingRecord: (addingRecord: boolean) => void;
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
          />
        </td>
      ))}
      <td className={"space-x-2 border border-gray-300 p-2"}>
        <SaveRecordButton
          appId={app.id}
          records={records}
          setRecords={setRecords}
          newRecord={newRecord}
          setNewRecord={setNewRecord}
          addingRecord={addingRecord}
          setAddingRecord={setAddingRecord}
          recordTemplate={recordTemplate}
        />
        <DeleteRecordButton
          recordId={record.recordId}
          records={records}
          setRecords={setRecords}
        />
      </td>
    </tr>
  );
};

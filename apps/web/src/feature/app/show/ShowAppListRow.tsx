import type { App, Record, Records } from "@feature/app/schema";
import { DeleteRecordButton } from "@feature/app/show/DeleteRecordButton";
import { RecordCell } from "@feature/app/show/RecordCell";
import { SaveRecordButton } from "@feature/app/show/SaveRecordButton";

export const ShowAppListRow = ({
  recordId,
  recordIndex,
  columns,
  isEditing,
  newRecord,
  setNewRecord,
  app,
  records,
  setRecords,
  addingRecord,
  setAddingRecord,
  recordTemplate,
}: {
  recordId: string;
  recordIndex: number;
  columns: Record;
  isEditing: boolean;
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
      {Object.entries(columns).map(([fieldId, column]) => (
        <td key={fieldId} className={"border border-gray-300 p-2"}>
          <RecordCell
            fieldId={fieldId}
            isEditing={isEditing}
            column={column}
            newRecord={newRecord}
            setNewRecord={setNewRecord}
            fields={app.fields}
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
          recordId={recordId}
          records={records}
          setRecords={setRecords}
        />
      </td>
    </tr>
  );
};

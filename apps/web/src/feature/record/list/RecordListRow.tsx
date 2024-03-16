import type { App, Record, Records } from "@feature/app/schema";
import { RecordCell } from "@feature/record/list/RecordCell";
import { RecordRowOperation } from "@feature/record/list/RecordRowOperation";

export const RecordListRow = ({
  record,
  recordIndex,
  newRecord,
  setNewRecord,
  app,
  records,
  setRecords,
  isAddingRecord,
  setIsAddingRecord,
  recordTemplate,
}: {
  record: Records[number];
  recordIndex: number;
  newRecord: Record;
  setNewRecord: (record: Record) => void;
  app: App;
  records: Records;
  setRecords: (records: Records) => void;
  isAddingRecord: boolean;
  setIsAddingRecord: (isAddingRecord: boolean) => void;
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
            isAddingRecord={isAddingRecord}
          />
        </td>
      ))}
      <td className={"space-x-2 border border-gray-300 p-2"}>
        <RecordRowOperation
          record={record}
          records={records}
          setRecords={setRecords}
          newRecord={newRecord}
          setNewRecord={setNewRecord}
          isAddingRecord={isAddingRecord}
          setIsAddingRecord={setIsAddingRecord}
          recordTemplate={recordTemplate}
          appId={app.id}
        />
      </td>
    </tr>
  );
};

import type { Record, Records } from "@feature/app/schema";
import { DeleteRecordButton } from "@feature/record/list/DeleteRecordButton";
import { SaveNewRecordButton } from "@feature/record/list/SaveNewRecordButton";

export const RecordRowOperation = ({
  record,
  records,
  setRecords,
  newRecord,
  setNewRecord,
  addingRecord,
  setAddingRecord,
  recordTemplate,
  appId,
}: {
  record: Records[number];
  records: Records;
  setRecords: (records: Records) => void;
  newRecord: Record;
  setNewRecord: (record: Record) => void;
  addingRecord: boolean;
  setAddingRecord: (addingRecord: boolean) => void;
  recordTemplate: Record;
  appId: string;
}) => {
  return (
    <>
      <SaveNewRecordButton
        appId={appId}
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
    </>
  );
};

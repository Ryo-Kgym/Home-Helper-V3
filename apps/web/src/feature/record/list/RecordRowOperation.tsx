import type { Record, Records } from "@feature/app/schema";
import { DeleteRecordButton } from "@feature/record/list/DeleteRecordButton";
import { ModifyRecordButton } from "@feature/record/list/ModifyRecordButton";
import { SaveNewRecordButton } from "@feature/record/list/SaveNewRecordButton";

export const RecordRowOperation = ({
  record,
  records,
  setRecords,
  newRecord,
  setNewRecord,
  isAddingRecord,
  setIsAddingRecord,
  recordTemplate,
  appId,
}: {
  record: Records[number];
  records: Records;
  setRecords: (records: Records) => void;
  newRecord: Record;
  setNewRecord: (record: Record) => void;
  isAddingRecord: boolean;
  setIsAddingRecord: (isAddingRecord: boolean) => void;
  recordTemplate: Record;
  appId: string;
}) => {
  if (record.isEditing) {
    return (
      <>
        <SaveNewRecordButton
          appId={appId}
          records={records}
          setRecords={setRecords}
          newRecord={newRecord}
          setNewRecord={setNewRecord}
          addingRecord={isAddingRecord}
          setAddingRecord={setIsAddingRecord}
          recordTemplate={recordTemplate}
        />
      </>
    );
  }

  return (
    <>
      <ModifyRecordButton
        record={record}
        records={records}
        setRecords={setRecords}
      />
      <DeleteRecordButton
        recordId={record.recordId}
        records={records}
        setRecords={setRecords}
      />
    </>
  );
};

import type { Record, Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import { DeleteRecordButton } from "@feature/record/list/DeleteRecordButton";
import { ModifyRecordButton } from "@feature/record/list/ModifyRecordButton";
import { SaveNewRecordButton } from "@feature/record/list/SaveNewRecordButton";

export const RecordRowOperation = ({
  record,
  records,
  setRecords,
  newRecord,
  setNewRecord,
  mode,
  setMode,
  recordTemplate,
  appId,
}: {
  record: Records[number];
  records: Records;
  setRecords: (records: Records) => void;
  newRecord: Record;
  setNewRecord: (record: Record) => void;
  mode: RecordListMode;
  setMode: (mode: RecordListMode) => void;
  recordTemplate: Record;
  appId: string;
}) => {
  switch (mode) {
    case "add":
      return (
        <SaveNewRecordButton
          appId={appId}
          records={records}
          setRecords={setRecords}
          newRecord={newRecord}
          setNewRecord={setNewRecord}
          mode={mode}
          setMode={setMode}
          recordTemplate={recordTemplate}
        />
      );
    case "show":
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
  }
};

import type { Records } from "@feature/app/schema/record-schema";

import type { RecordListMode } from "./RecordListClient";
import { useDeleteRecordMutation } from "../../../../../../packages/graphql/public";

export const DeleteRecordButton = ({
  recordId,
  records,
  setRecords,
  mode,
  setMode,
}: {
  recordId: string;
  records: Records;
  setRecords: (records: Records) => void;
  mode: RecordListMode;
  setMode: (mode: RecordListMode) => void;
}) => {
  const [, mut] = useDeleteRecordMutation();
  const setRecordsState = () => {
    const copiedRecords = { ...records };
    Object.entries(copiedRecords).forEach(([key, value]) => {
      if (value.recordId === recordId) {
        delete copiedRecords[key];
      }
    });
    setRecords(copiedRecords);
  };

  const deleteRecordHandler = async (recordId: string) => {
    try {
      if (mode === "show") {
        const { error } = await mut({ recordId });
        if (error) {
          throw error;
        }
        setRecordsState();
        alert("削除しました");
      }

      if (mode === "add") {
        setRecordsState();
        setMode("show");
      }
    } catch (e) {
      console.error(e);
      alert("削除に失敗しました");
    }
  };

  return <button onClick={() => deleteRecordHandler(recordId)}>削除</button>;
};

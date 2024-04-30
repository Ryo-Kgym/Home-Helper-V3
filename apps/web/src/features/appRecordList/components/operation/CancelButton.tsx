import type { Records } from "@oneforall/domain/schema/recordSchema";
import { RecordListMode } from "@features/appRecordList/types/recordListMode";

export const CancelButton = ({
  setMode,
  defaultRecord,
  setRecord,
}: {
  setMode: (mode: RecordListMode) => void;
  defaultRecord: Records[number];
  setRecord: (record: Records[number]) => void;
}) => {
  const cancelHandler = () => {
    setMode("show");
    setRecord(defaultRecord);
  };

  return <button onClick={cancelHandler}>キャンセル</button>;
};

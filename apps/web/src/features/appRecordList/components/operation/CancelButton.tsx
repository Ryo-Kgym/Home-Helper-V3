import type { Records } from "@oneforall/domain/schema/recordSchema";

import { RecordListMode } from "../../types/recordListMode";

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

  return (
    <button onClick={cancelHandler} className={"bg-inherit"}>
      キャンセル
    </button>
  );
};

import { RecordListMode } from "@feature/view/recordList/RecordListClient";
import { Records } from "@oneforall/domain/schema";

export const ModifyRecordButton = ({
  setMode,
  record,
  setRecord,
}: {
  setMode: (mode: RecordListMode) => void;
  record: Records[number];
  setRecord: (record: Records[number]) => void;
}) => {
  const openModify = () => {
    setMode("modify");
    setRecord({
      ...record,
      isEditing: true,
    });
  };

  return <button onClick={openModify}>編集</button>;
};

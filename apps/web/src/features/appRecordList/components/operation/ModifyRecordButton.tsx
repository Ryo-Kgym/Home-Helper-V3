import { Edit } from "@components/ui/v4/icon/Edit";
import { RecordListMode } from "@features/appRecordList/types/recordListMode";
import { Records } from "@oneforall/domain/schema/recordSchema";

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

  return (
    <button onClick={openModify}>
      <Edit />
    </button>
  );
};

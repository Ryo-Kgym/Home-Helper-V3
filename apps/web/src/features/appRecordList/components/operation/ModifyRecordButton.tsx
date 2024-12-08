import { Records } from "@oneforall/domain/schema/recordSchema";

import { Edit } from "~/components/ui/v4/icon/Edit";
import { RecordListMode } from "../../types/recordListMode";

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
    <button onClick={openModify} className={"bg-inherit"}>
      <Edit />
    </button>
  );
};

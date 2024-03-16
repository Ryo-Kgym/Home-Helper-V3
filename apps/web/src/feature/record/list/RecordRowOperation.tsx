import type { Record, Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import { ModifyRecordButton } from "@feature/record/list/ModifyRecordButton";
import { SaveNewRecordButton } from "@feature/record/list/SaveNewRecordButton";

import { DeleteRecordButton } from "./DeleteRecordButton";

export const RecordRowOperation = (props: {
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
  const ope = getOperationButtonList(props.record.isEditing);
  return ope[props.mode].map((buttonType, index) => {
    switch (buttonType) {
      case "insert":
        return <SaveNewRecordButton key={`operation-${index}`} {...props} />;
      case "update":
        return null;
      case "modify":
        return <ModifyRecordButton key={`operation-${index}`} {...props} />;
      case "delete":
        return (
          <DeleteRecordButton
            key={`operation-${index}`}
            recordId={props.record.recordId}
            {...props}
          />
        );
      case "cancel":
        return null;
    }
  });
};

const getOperationButtonList = (
  isEditing: boolean,
): {
  [mode in RecordListMode]: ButtonType[];
} => {
  if (isEditing) {
    return {
      add: ["insert", "cancel"],
      modify: ["update", "cancel"],
      show: [],
    };
  }
  return {
    add: [],
    modify: [],
    show: ["modify", "delete"],
  };
};

type ButtonType = "insert" | "update" | "modify" | "delete" | "cancel";

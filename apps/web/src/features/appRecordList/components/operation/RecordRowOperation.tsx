import { ComponentProps } from "react";
import { Records } from "@oneforall/domain/schema/recordSchema";

import { RecordListMode } from "../../types/recordListMode";
import { CancelButton } from "./CancelButton";
import { DeleteRecordButton } from "./DeleteRecordButton";
import { ModifyRecordButton } from "./ModifyRecordButton";
import { UpdateRecordButton } from "./UpdateRecordButton";

export const RecordRowOperation = (
  props: // prettier-ignore
  { record: Records[number],
    uneditable?: boolean }
    & ComponentProps<typeof ModifyRecordButton>
    & ComponentProps<typeof DeleteRecordButton>
    & ComponentProps<typeof CancelButton>,
) => {
  if (props.uneditable) return null;

  const ope = getOperationButtonList(props.record.isEditing);
  return (
    <div className={"flex space-x-3"}>
      {ope[props.mode].map((buttonType, index) => {
        switch (buttonType) {
          case "update":
            return <UpdateRecordButton key={`operation-${index}`} {...props} />;
          case "modify":
            return <ModifyRecordButton key={`operation-${index}`} {...props} />;
          case "delete":
            return <DeleteRecordButton key={`operation-${index}`} {...props} />;
          case "cancel":
            return <CancelButton key={`operation-${index}`} {...props} />;
        }
      })}
    </div>
  );
};

const getOperationButtonList = (
  isEditing: boolean,
): {
  [mode in RecordListMode]: ButtonType[];
} => {
  if (isEditing) {
    return {
      add: [],
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

type ButtonType = "update" | "modify" | "delete" | "cancel";

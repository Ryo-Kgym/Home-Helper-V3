import type { Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import type { ComponentProps } from "react";
import { CancelButton } from "@feature/record/list/operation/CancelButton";
import { ModifyRecordButton } from "@feature/record/list/operation/ModifyRecordButton";
import { SaveNewRecordButton } from "@feature/record/list/operation/SaveNewRecordButton";

import { DeleteRecordButton } from "./DeleteRecordButton";

export const RecordRowOperation = (
  props: // prettier-ignore
  { record: Records[number] }
    & ComponentProps<typeof SaveNewRecordButton>
    & ComponentProps<typeof ModifyRecordButton>
    & ComponentProps<typeof DeleteRecordButton>
    & ComponentProps<typeof CancelButton>,
) => {
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
        return <DeleteRecordButton key={`operation-${index}`} {...props} />;
      case "cancel":
        return <CancelButton key={`operation-${index}`} {...props} />;
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
      add: ["insert", "delete"],
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

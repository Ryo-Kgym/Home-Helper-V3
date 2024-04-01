import type { Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";
import type { ComponentProps } from "react";
import { AddRecordCancelButton } from "@feature/record/list/operation/AddRecordCancelButton";

import { SaveNewRecordButton } from "./SaveNewRecordButton";

export const AddRecordRowOperation = (
  props: // prettier-ignore
  { record: Records[number], mode: RecordListMode }
    & ComponentProps<typeof SaveNewRecordButton>,
) => {
  const ope = getOperationButtonList(props.record.isEditing);
  return (
    <div className={"flex space-x-3"}>
      {ope[props.mode].map((buttonType, index) => {
        switch (buttonType) {
          case "insert":
            return (
              <SaveNewRecordButton key={`operation-${index}`} {...props} />
            );
          case "cancel":
            return (
              <AddRecordCancelButton key={`operation-${index}`} {...props} />
            );
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
      add: ["insert", "cancel"],
      modify: [],
      show: [],
    };
  }
  return {
    add: [],
    modify: [],
    show: [],
  };
};

type ButtonType = "insert" | "cancel";

import { ComponentProps } from "react";

import { RecordListMode } from "../../types/recordListMode";
import { AddRecordCancelButton } from "./AddRecordCancelButton";
import { SaveNewRecordButton } from "./SaveNewRecordButton";

export const AddRecordRowOperation = (
  props: ComponentProps<typeof SaveNewRecordButton>,
) => {
  const ope = getOperationButtonList();
  return (
    <div className={"flex space-x-3"}>
      {ope.add.map((buttonType, index) => {
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

const getOperationButtonList = (): {
  [mode in RecordListMode]: ButtonType[];
} => ({
  add: ["insert", "cancel"],
  modify: [],
  show: [],
});

type ButtonType = "insert" | "cancel";

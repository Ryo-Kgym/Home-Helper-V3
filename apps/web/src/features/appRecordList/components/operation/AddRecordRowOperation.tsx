import { ComponentProps } from "react";
import { AddRecordCancelButton } from "@features/appRecordList/components/operation/AddRecordCancelButton";
import { RecordListMode } from "@features/appRecordList/types/recordListMode";

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

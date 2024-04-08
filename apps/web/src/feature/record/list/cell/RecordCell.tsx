import { ModifyCell } from "@feature/record/list/cell/ModifyCell";

import { ShowCell } from "./ShowCell";

import type { RecordListMode } from "@feature/record/list/RecordListClient";
import type { ComponentProps, ReactNode } from "react";


export const RecordCell = (
  // prettier-ignore
  props: { mode: RecordListMode }
    & ComponentProps<typeof ModifyCell>
    & ComponentProps<typeof ShowCell>,
) => {
  const Cell = getCellComponent(props.record.isEditing)[props.mode];
  return <Cell {...props} />;
};

const getCellComponent = (
  isEditing: boolean,
): {
  [key in RecordListMode]: (
    props: ComponentProps<typeof RecordCell>,
  ) => ReactNode;
} => {
  if (isEditing) {
    return {
      add: ShowCell,
      modify: ModifyCell,
      show: ShowCell,
    };
  }
  return {
    add: ShowCell,
    modify: ShowCell,
    show: ShowCell,
  };
};

import type { RecordListMode } from "@feature/record/list/RecordListClient";
import type { ComponentProps, ReactNode } from "react";
import React from "react";
import { AddCell } from "@feature/record/list/cell/AddCell";
import { ModifyCell } from "@feature/record/list/cell/ModifyCell";

import { ShowCell } from "./ShowCell";

export const RecordCell = (
  // prettier-ignore
  props: { mode: RecordListMode; isEditing: boolean }
    & ComponentProps<typeof AddCell>
    & ComponentProps<typeof ModifyCell>
    & ComponentProps<typeof ShowCell>,
) => {
  const Cell = getCellComponent(props.isEditing)[props.mode];
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
      add: AddCell,
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

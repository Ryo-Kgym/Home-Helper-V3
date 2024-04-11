"use client";

import { ComponentProps, useEffect } from "react";
import { Table } from "@components/ui/v4/table";
import { RecordListTable } from "@feature/view/recordList/RecordListTable";
import { useResetMode } from "@feature/view/recordList/useModeState";
import { useInitRecords } from "@feature/view/recordList/useRecordsState";
import { Records } from "@oneforall/domain/schema/record-schema";
import { View } from "@oneforall/domain/schema/view/view-schema";

export type RecordListMode = "add" | "modify" | "show";

export const RecordListClient = ({
  view,
  records: defaultRecords,
  headerItems,
}: {
  view: View;
  records: Records;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
}) => {
  const initialize = useInitRecords();
  const resetMode = useResetMode();

  useEffect(
    () => {
      initialize(defaultRecords);
      resetMode();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className={"space-y-10"}>
      <RecordListTable view={view} headerItems={headerItems} />
    </div>
  );
};

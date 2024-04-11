"use client";

import { ComponentProps, useEffect } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Table } from "@components/ui/v4/table";
import { RedirectViewSettingButton } from "@feature/view/nav/RedirectViewSettingButton";
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
      <Title title={view.name}>
        <RedirectViewSettingButton viewId={view.id} />
      </Title>
      <RecordListTable view={view} headerItems={headerItems} />
    </div>
  );
};

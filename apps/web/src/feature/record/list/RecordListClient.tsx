"use client";

import type { Table } from "@components/ui/v4/table";
import type { App } from "@feature/app/schema/app-schema";
import type { Columns, Records } from "@feature/app/schema/record-schema";
import type { ComponentProps } from "react";
import { useEffect } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { AddRecordButton } from "@feature/nav/AddRecordButton";
import { RedirectImportButton } from "@feature/nav/RedirectImportButton";
import { RedirectSettingButton } from "@feature/nav/RedirectSettingButton";
import { RecordListTable } from "@feature/record/list/RecordListTable";
import { useResetMode } from "@feature/record/list/useModeState";
import { useInitRecords } from "@feature/record/list/useRecordsState";

export type RecordListMode = "add" | "modify" | "show";

export const RecordListClient = ({
  app,
  columnsTemplate,
  records: defaultRecords,
  headerItems,
}: {
  app: App;
  columnsTemplate: Columns;
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
      <Title title={app.name}>
        <RedirectSettingButton appId={app.id} />
        <AddRecordButton columnTemplate={columnsTemplate} />
        <RedirectImportButton appId={app.id} />
      </Title>
      <RecordListTable app={app} headerItems={headerItems} />
    </div>
  );
};

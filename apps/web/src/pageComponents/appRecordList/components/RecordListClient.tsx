"use client";

import { ComponentProps, useEffect } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Table } from "@components/ui/v4/table";
import { AddRecordButton } from "@feature/app/nav/AddRecordButton";
import { RedirectChartButton } from "@feature/app/nav/RedirectChartButton";
import { RedirectImportButton } from "@feature/app/nav/RedirectImportButton";
import { RedirectSettingButton } from "@feature/app/nav/RedirectSettingButton";
import { RecordListTable } from "@features/appRecordList/components/RecordListTable";
import { useResetMode } from "@hooks/states/app/recordListMode/useModeStateZustand";
import { useInitRecords } from "@hooks/states/app/records/useInitRecords";
import { App } from "@oneforall/domain/schema/appSchema";
import { Columns, Records } from "@oneforall/domain/schema/recordSchema";

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
        <RedirectChartButton appId={app.id} />
      </Title>
      <RecordListTable app={app} headerItems={headerItems} />
    </div>
  );
};

"use client";

import type { App, ImportFileSettings, Records } from "@feature/app/schema";
import { useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { RedirectListButton } from "@feature/app/modify/RedirectListButton";
import { RedirectImportButton } from "@feature/record/list/RedirectImportButton";
import { RedirectSettingButton } from "@feature/record/list/RedirectSettingButton";

import { ImportHistory } from "./ImportHistory";
import { ImportPreview } from "./ImportPreview";

export const RecordImportClient = ({
  app,
  importFileSettings,
  importHistories,
}: {
  app: App;
  importFileSettings: ImportFileSettings;
  importHistories: ImportHistory[];
}) => {
  const [previewRecords, setPreviewRecords] = useState<Records>({});
  return (
    <div className={"space-y-10"}>
      <Title>
        <div className={"text-3xl"}>{app.name}</div>
        <RedirectSettingButton appId={app.id} />
        <RedirectListButton appId={app.id} />
        <RedirectImportButton appId={app.id} />
      </Title>
      <ImportHistory importHistories={importHistories} />
      <ImportPreview
        previewRecords={previewRecords}
        setPreviewRecords={setPreviewRecords}
        app={app}
        importFileSettings={importFileSettings}
      />
    </div>
  );
};

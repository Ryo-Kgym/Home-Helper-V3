"use client";

import type {
  App,
  ImportFileHistory,
  ImportFileSettings,
  Records,
} from "@feature/app/schema";
import { useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { RedirectListButton } from "@feature/app/modify/RedirectListButton";
import { RedirectImportButton } from "@feature/record/list/RedirectImportButton";
import { RedirectSettingButton } from "@feature/record/list/RedirectSettingButton";

import { ImportHistoryList } from "./ImportHistoryList";
import { ImportPreview } from "./ImportPreview";

export const RecordImportClient = ({
  app,
  importFileSettings,
  importHistories,
}: {
  app: App;
  importFileSettings: ImportFileSettings;
  importHistories: ImportFileHistory[];
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
      <ImportHistoryList
        importHistories={importHistories}
        setPreviewRecords={setPreviewRecords}
      />
      <ImportPreview
        app={app}
        importFileSettings={importFileSettings}
        previewRecords={previewRecords}
        setPreviewRecords={setPreviewRecords}
      />
    </div>
  );
};

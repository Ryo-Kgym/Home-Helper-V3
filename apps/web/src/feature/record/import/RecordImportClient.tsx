"use client";

import type { App, ImportFileSettings } from "@feature/app/schema";
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
  return (
    <div className={"space-y-10"}>
      <Title>
        <div className={"text-3xl"}>{app.name}</div>
        <RedirectSettingButton appId={app.id} />
        <RedirectListButton appId={app.id} />
        <RedirectImportButton appId={app.id} />
      </Title>
      <ImportHistory importHistories={importHistories} />
      <ImportPreview app={app} importFileSettings={importFileSettings} />
    </div>
  );
};

"use client";

import type {
  App,
  ImportFileHistory,
  ImportFileSettings,
  Records,
} from "@feature/app/schema";
import { useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Modal } from "@components/ui/v4/modal";
import { RedirectListButton } from "@feature/app/modify/RedirectListButton";
import { SetImportFileSetting } from "@feature/record/import/SetImportFileSetting";
import { RedirectImportButton } from "@feature/record/list/RedirectImportButton";
import { RedirectSettingButton } from "@feature/record/list/RedirectSettingButton";

import { ImportHistoryList } from "./ImportHistoryList";
import { ImportPreview } from "./ImportPreview";

export const RecordImportClient = ({
  app,
  importFileSettings,
  importHistories,
  requiredInitializeSettings,
}: {
  app: App;
  importFileSettings: ImportFileSettings;
  importHistories: ImportFileHistory[];
  requiredInitializeSettings: boolean;
}) => {
  const [previewRecords, setPreviewRecords] = useState<Records>({});
  const [isOpen, setIsOpen] = useState<boolean>(requiredInitializeSettings);
  return (
    <>
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
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Body>
          <SetImportFileSetting
            appId={app.id}
            importFileSettings={importFileSettings}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

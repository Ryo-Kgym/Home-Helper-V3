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
import { OpenSettingButton } from "@feature/record/list/OpenSettingButton";
import { RedirectImportButton } from "@feature/record/list/RedirectImportButton";
import { RedirectSettingButton } from "@feature/record/list/RedirectSettingButton";

import { ImportHistoryList } from "./ImportHistoryList";
import { ImportPreview } from "./ImportPreview";

export const RecordImportClient = ({
  app,
  importFileSettings,
  importHistories: defaultImportHistories,
  requiredInitializeSettings,
}: {
  app: App;
  importFileSettings: ImportFileSettings;
  importHistories: ImportFileHistory[];
  requiredInitializeSettings: boolean;
}) => {
  const [histories, setHistories] = useState<ImportFileHistory[]>(
    defaultImportHistories,
  );
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
          <OpenSettingButton onOpen={() => setIsOpen(true)} />
        </Title>
        <ImportHistoryList
          histories={histories}
          setHistories={setHistories}
          setPreviewRecords={setPreviewRecords}
        />
        <ImportPreview
          app={app}
          importFileSettings={importFileSettings}
          previewRecords={previewRecords}
          histories={histories}
          setHistories={setHistories}
          setPreviewRecords={setPreviewRecords}
        />
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Body>
          <SetImportFileSetting
            appId={app.id}
            importFileSettings={importFileSettings}
            setAfterHandler={() => setIsOpen(false)}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

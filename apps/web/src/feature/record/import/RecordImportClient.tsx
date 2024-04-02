"use client";

import type {
  App,
  ImportFileHistory,
  ImportFileSettings,
  Records,
} from "@feature/app/schema";
import { useEffect, useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Modal } from "@components/ui/v4/modal";
import { OpenSettingButton } from "@feature/nav/OpenSettingButton";
import { RedirectImportButton } from "@feature/nav/RedirectImportButton";
import { RedirectListButton } from "@feature/nav/RedirectListButton";
import { RedirectSettingButton } from "@feature/nav/RedirectSettingButton";
import { SetImportFileSetting } from "@feature/record/import/SetImportFileSetting";
import { useImportFileSettings } from "@feature/record/import/useImportSettingsState";

import { ImportHistoryList } from "./ImportHistoryList";
import { ImportPreview } from "./ImportPreview";

export const RecordImportClient = ({
  app,
  importFileSettings: defaultSettings,
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
  const { setImportFileSettings } = useImportFileSettings();
  const [previewRecords, setPreviewRecords] = useState<Records>({});
  const [isOpen, setIsOpen] = useState<boolean>(requiredInitializeSettings);

  useEffect(() => {
    setImportFileSettings(defaultSettings);
  }, []);

  return (
    <>
      <div className={"space-y-10"}>
        <Title title={app.name}>
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
            setAfterHandler={() => setIsOpen(false)}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

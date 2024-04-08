"use client";

import { Title } from "@components/ui/v4/frame/Title";
import { Modal } from "@components/ui/v4/modal";
import { OpenSettingButton } from "@feature/nav/OpenSettingButton";
import { RedirectImportButton } from "@feature/nav/RedirectImportButton";
import { RedirectListButton } from "@feature/nav/RedirectListButton";
import { RedirectSettingButton } from "@feature/nav/RedirectSettingButton";
import { SetImportFileSetting } from "@feature/record/import/SetImportFileSetting";
import { useImportFileHistories } from "@feature/record/import/useImportFileHistoriesState";
import { useImportFileSettings } from "@feature/record/import/useImportSettingsState";
import { useEffect, useState } from "react";

import { ImportHistoryList } from "./ImportHistoryList";
import { ImportPreview } from "./ImportPreview";

import type {
  App,
  ImportFileHistory,
  ImportFileSettings,
} from "@feature/app/schema";

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
  const { setImportFileSettings } = useImportFileSettings();
  const { setImportFileHistories } = useImportFileHistories();

  const [isOpen, setIsOpen] = useState<boolean>(requiredInitializeSettings);

  useEffect(
    () => {
      setImportFileSettings(defaultSettings);
      setImportFileHistories(defaultImportHistories);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      <div className={"space-y-10"}>
        <Title title={app.name}>
          <RedirectSettingButton appId={app.id} />
          <RedirectListButton appId={app.id} />
          <RedirectImportButton appId={app.id} />
          <OpenSettingButton onOpen={() => setIsOpen(true)} />
        </Title>
        <ImportHistoryList />
        <ImportPreview app={app} />
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

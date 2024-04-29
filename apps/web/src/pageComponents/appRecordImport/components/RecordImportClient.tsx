"use client";

import { useEffect, useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Modal } from "@components/ui/v4/modal";
import { Tabs } from "@components/ui/v4/tab";
import { OpenSettingButton } from "@feature/app/nav/OpenSettingButton";
import { RedirectImportButton } from "@feature/app/nav/RedirectImportButton";
import { RedirectListButton } from "@feature/app/nav/RedirectListButton";
import { RedirectSettingButton } from "@feature/app/nav/RedirectSettingButton";
import { SetImportFileFieldMapping } from "@features/appImportFileFieldMapping/components/SetImportFileFieldMapping";
import { useSetImportFileFieldMapping } from "@features/appImportFileFieldMapping/hooks/useSetImportFileFieldMapping";
import { SetImportFileSetting } from "@features/appImportFileSetting/components/SetImportFileSetting";
import { useImportFileSettings } from "@features/appImportFileSetting/hooks/useImportSettingsState";
import { App } from "@oneforall/domain/schema/appSchema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/importFileFieldMappingSchema";
import { ImportFileHistory } from "@oneforall/domain/schema/importFileHistorySchema";
import { ImportFileSettings } from "@oneforall/domain/schema/importFileSettingsSchema";
import { ImportHistoryList } from "@pageComponents/appRecordImport/components/ImportHistoryList";
import { useImportFileHistories } from "@pageComponents/appRecordImport/hooks/useImportFileHistories";
import { usePreviewRecords } from "@pageComponents/appRecordImport/hooks/usePreviewRecords";

import { ImportPreview } from "./ImportPreview";

/**
 * @package
 */
export const RecordImportClient = ({
  app,
  importFileSettings: defaultSettings,
  importHistories: defaultImportHistories,
  requiredInitializeSettings,
  importFileFieldMapping: defaultImportFileFieldMapping,
}: {
  app: App;
  importFileSettings: ImportFileSettings;
  importHistories: ImportFileHistory[];
  requiredInitializeSettings: boolean;
  importFileFieldMapping: ImportFileFieldMapping;
}) => {
  const { setImportFileSettings } = useImportFileSettings();
  const { setImportFileHistories } = useImportFileHistories();
  const setImportFileFieldMapping = useSetImportFileFieldMapping();
  const previewRecords = usePreviewRecords();

  const [isOpen, setIsOpen] = useState<boolean>(requiredInitializeSettings);

  useEffect(
    () => {
      setImportFileSettings(defaultSettings);
      setImportFileHistories(defaultImportHistories);
      setImportFileFieldMapping(defaultImportFileFieldMapping);
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
        <ImportPreview app={app} previewRecords={previewRecords} />
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Body>
          <Tabs
            tabs={{
              fieldMapping: {
                label: "フィールドマッピング",
                Component: <SetImportFileFieldMapping />,
              },
              fileFormat: {
                label: "取込",
                Component: (
                  <SetImportFileSetting
                    appId={app.id}
                    setAfterHandler={() => setIsOpen(false)}
                  />
                ),
              },
            }}
            defaultTab={"fieldMapping"}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

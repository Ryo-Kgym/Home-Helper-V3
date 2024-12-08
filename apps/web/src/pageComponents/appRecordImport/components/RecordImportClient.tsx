"use client";

import { useEffect, useState } from "react";
import { App } from "@oneforall/domain/schema/appSchema";
import { ImportFileFieldMapping } from "@oneforall/domain/schema/importFileFieldMappingSchema";
import { ImportFileHistory } from "@oneforall/domain/schema/importFileHistorySchema";
import { ImportFileSettings } from "@oneforall/domain/schema/importFileSettingsSchema";
import { LookupRecords } from "@oneforall/domain/type/lookupRecords";

import { Title } from "~/components/ui/v4/frame/Title";
import { Modal } from "~/components/ui/v4/modal";
import { PageClientFrame } from "~/components/ui/v4/PageClientFrame";
import { Tabs } from "~/components/ui/v4/tab";
import { OpenSettingButton } from "../../../feature/app/nav/OpenSettingButton";
import { RedirectImportButton } from "../../../feature/app/nav/RedirectImportButton";
import { RedirectListButton } from "../../../feature/app/nav/RedirectListButton";
import { RedirectSettingButton } from "../../../feature/app/nav/RedirectSettingButton";
import { useSetImportFileFieldMapping } from "../../../features/appImportFileFieldMapping/client/useSetImportFileFieldMapping";
import { SetImportFileFieldMapping } from "../../../features/appImportFileFieldMapping/components/SetImportFileFieldMapping";
import { useImportFileSettings } from "../../../features/appImportFileSetting/client/useImportSettingsState";
import { SetImportFileSetting } from "../../../features/appImportFileSetting/components/SetImportFileSetting";
import { useImportFileHistories } from "../hooks/useImportFileHistories";
import { usePreviewRecords } from "../hooks/usePreviewRecords";
import { ImportHistoryList } from "./ImportHistoryList";
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
  lookupRecords,
}: {
  app: App;
  importFileSettings: ImportFileSettings;
  importHistories: ImportFileHistory[];
  requiredInitializeSettings: boolean;
  importFileFieldMapping: ImportFileFieldMapping;
  lookupRecords: LookupRecords;
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
      <PageClientFrame
        title={
          <Title title={app.name}>
            <RedirectSettingButton appId={app.id} />
            <RedirectListButton appId={app.id} />
            <RedirectImportButton appId={app.id} />
            <OpenSettingButton onOpen={() => setIsOpen(true)} />
          </Title>
        }
      >
        <ImportHistoryList />
        <ImportPreview
          app={app}
          previewRecords={previewRecords}
          lookupRecords={lookupRecords}
        />
      </PageClientFrame>
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

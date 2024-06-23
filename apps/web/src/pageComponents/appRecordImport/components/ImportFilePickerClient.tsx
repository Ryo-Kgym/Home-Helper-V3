"use client";

import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { loadImportFile } from "@features/appFileImport/client/loadImportFile";
import { selectSingleFile } from "@features/appFileImport/client/selectSingleFile";
import { useImportFileFieldMapping } from "@features/appImportFileFieldMapping/client/useImportFileFieldMapping";
import { useImportFileSettings } from "@features/appImportFileSetting/client/useImportSettingsState";
import { Fields } from "@oneforall/domain/schema/appSchema";
import { LookupRecords } from "@oneforall/domain/type/lookupRecords";
import { convertPreviewRecords } from "@pageComponents/appRecordImport/client/convertRecords";
import { useImportFileHistories } from "@pageComponents/appRecordImport/hooks/useImportFileHistories";
import { useInsertImportFileRecords } from "@pageComponents/appRecordImport/hooks/useInsertImportFileRecords";
import { usePreviewRecords } from "@pageComponents/appRecordImport/hooks/usePreviewRecords";
import { useResetPreviewRecords } from "@pageComponents/appRecordImport/hooks/useResetPreviewRecords";
import { useSetPreviewRecords } from "@pageComponents/appRecordImport/hooks/useSetPreviewRecords";

export const ImportFilePickerClient = ({
  appId,
  fields,
  lookupRecords,
}: {
  appId: string;
  fields: Fields;
  lookupRecords: LookupRecords;
}) => {
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { importFileSettings } = useImportFileSettings();

  const { importFileHistories, setImportFileHistories } =
    useImportFileHistories();
  const previewRecords = usePreviewRecords();
  const setPreviewRecords = useSetPreviewRecords();
  const resetPreviewRecords = useResetPreviewRecords();
  const fieldsMapping = useImportFileFieldMapping();

  const { insertImportFileRecords } = useInsertImportFileRecords({
    appId,
    lookupRecords,
  });

  const fileChangeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const { file, isEmpty } = selectSingleFile(event);
    if (isEmpty) return;

    const { data } = await loadImportFile(file, importFileSettings);
    console.log("[load import file]", data);

    const records = convertPreviewRecords(data, fields, fieldsMapping);

    if (Object.keys(records).length === 0) {
      notify("取込に失敗しました。設定を見直してください。");
      resetClickHandler();
      return;
    }
    setPreviewRecords(records);
    setFileName(file.name);

    console.log("[converted records]", records);
  };

  const importClickHandler = async () => {
    try {
      const { importFileHistory } = await insertImportFileRecords(
        previewRecords,
        fileName,
      );
      notify("取込が完了しました");
      setImportFileHistories([...importFileHistories, importFileHistory]);
      resetClickHandler();
    } catch (e) {
      console.error(e);
      notify("取込に失敗しました");
    }
  };

  const resetClickHandler = () => {
    resetPreviewRecords();
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const importDisabled = Object.keys(previewRecords).length === 0 || !fileName;

  return (
    <div className={"flex items-center space-x-4"}>
      <input
        type="file"
        ref={fileInputRef}
        accept=".csv"
        onChange={fileChangeHandler}
      />
      <Button
        label={"取込"}
        clickHandler={importClickHandler}
        type={"add"}
        disabled={importDisabled}
      />
      <Button
        label={"リセット"}
        clickHandler={resetClickHandler}
        type={"reset"}
      />
    </div>
  );
};

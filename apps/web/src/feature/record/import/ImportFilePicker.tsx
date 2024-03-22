import type {
  Fields,
  ImportFileHistory,
  ImportFileSettings,
  Records,
} from "@feature/app/schema";
import { useRef, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { convertRecords } from "@feature/record/import/convert-records";
import { loadImportFile } from "@feature/record/import/load-import-file";
import { selectSingleFile } from "@feature/record/import/select-single-file";
import { useInsertImportFileRecords } from "@feature/record/import/useInsertImportFileRecords";

export const ImportFilePicker = ({
  appId,
  fields,
  importFileSettings,
  previewRecords,
  setPreviewRecords,
  setHistories,
  histories,
}: {
  appId: string;
  fields: Fields;
  importFileSettings: ImportFileSettings;
  previewRecords: Records;
  histories: ImportFileHistory[];
  setHistories: (histories: ImportFileHistory[]) => void;
  setPreviewRecords: (records: Records) => void;
}) => {
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { insertImportFileRecords } = useInsertImportFileRecords({
    appId,
  });

  const fileChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { file, isEmpty } = selectSingleFile(event);
    if (isEmpty) return;

    const { data } = await loadImportFile(file, importFileSettings);
    console.log("[load import file]", data);

    const records = convertRecords(data, fields);

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
      setHistories([...histories, importFileHistory]);
      resetClickHandler();
    } catch (e) {
      console.error(e);
      notify("取込に失敗しました");
    }
  };

  const resetClickHandler = () => {
    setPreviewRecords({});
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

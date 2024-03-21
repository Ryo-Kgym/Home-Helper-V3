import type {
  ImportFileHistory,
  ImportFileSettings,
  Records,
} from "@feature/app/schema";
import { useState } from "react";
import { convertRecords } from "@feature/record/import/convert-records";
import { loadImportFile } from "@feature/record/import/load-import-file";
import { selectSingleFile } from "@feature/record/import/select-single-file";
import { useInsertImportFileRecords } from "@feature/record/import/useInsertImportFileRecords";

export const ImportFilePicker = ({
  appId,
  importFileSettings,
  previewRecords,
  setPreviewRecords,
  setHistories,
  histories,
}: {
  appId: string;
  importFileSettings: ImportFileSettings;
  previewRecords: Records;
  histories: ImportFileHistory[];
  setHistories: (histories: ImportFileHistory[]) => void;
  setPreviewRecords: (records: Records) => void;
}) => {
  const [fileName, setFileName] = useState<string>("");

  const { insertImportFileRecords } = useInsertImportFileRecords({
    appId: appId,
  });

  const fileChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { file, isEmpty } = selectSingleFile(event);
    if (isEmpty) return;

    const { data } = await loadImportFile(file, importFileSettings);
    console.log("[load import file]", data);

    const records = convertRecords(data);
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
      setPreviewRecords({});
      setFileName("");
      setHistories([...histories, importFileHistory]);
      alert("取込が完了しました");
    } catch (e) {
      console.error(e);
      alert("取込に失敗しました");
    }
  };

  return (
    <div className={"flex space-x-4"}>
      <input type="file" accept=".csv" onChange={fileChangeHandler} />
      <div>{fileName}</div>
      <button onClick={importClickHandler}>取込</button>
    </div>
  );
};

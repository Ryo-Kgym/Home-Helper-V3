"use client";

import type { App, ImportFileSettings, Records } from "@feature/app/schema";
import { useState } from "react";
import { Table } from "@components/ui/v4/table";
import { convertRecords } from "@feature/record/import/convert-records";
import { loadImportFile } from "@feature/record/import/load-import-file";
import { selectSingleFile } from "@feature/record/import/select-single-file";
import { useInsertImportFileRecords } from "@feature/record/import/useInsertImportFileRecords";

export const ImportPreview = ({
  app,
  importFileSettings,
  previewRecords,
  setPreviewRecords,
}: {
  app: App;
  importFileSettings: ImportFileSettings;
  previewRecords: Records;
  setPreviewRecords: (records: Records) => void;
}) => {
  const [fileName, setFileName] = useState<string>("");

  const { insertImportFileRecords } = useInsertImportFileRecords({
    appId: app.id,
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
      await insertImportFileRecords(previewRecords, fileName);
      setPreviewRecords({});
      setFileName("");
      alert("取込が完了しました");
    } catch (e) {
      console.error(e);
      alert("取込に失敗しました");
    }
  };

  return (
    <div>
      <div>プレビュー</div>
      <div className={"flex space-x-4"}>
        <input type="file" accept=".csv" onChange={fileChangeHandler} />
        <div>{fileName}</div>
        <button onClick={importClickHandler}>取込</button>
      </div>
      <Table>
        <Table.Header
          headerItems={Object.values(app.fields).map((f) => ({
            name: f.fieldName,
          }))}
        />
        <Table.Body
          data={Object.entries(previewRecords)}
          renderItem={([k, v]) => (
            <>
              {Object.entries(v.columns).map(([f, column]) => (
                <Table.BodyTd key={k + f}>{column.value}</Table.BodyTd>
              ))}
            </>
          )}
        />
      </Table>
    </div>
  );
};

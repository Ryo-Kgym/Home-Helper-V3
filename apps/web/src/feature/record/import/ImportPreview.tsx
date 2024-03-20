"use client";

import type { App, Records } from "@feature/app/schema";
import type { CsvFileSetting } from "@provider/file/loader/csv/CsvFileSetting";
import { useState } from "react";
import { Table } from "@components/ui/v4/table";
import { convertRecords } from "@feature/record/import/convert-records";
import { loadImportFile } from "@feature/record/import/load-import-file";
import { selectSingleFile } from "@feature/record/import/select-single-file";

export const ImportPreview = ({
  app,
  importFileSettings,
}: {
  app: App;
  importFileSettings: CsvFileSetting;
}) => {
  const [previewRecords, setPreviewRecords] = useState<Records>({});

  const fileChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { file, isEmpty } = selectSingleFile(event);
    if (isEmpty) return;

    const { data } = await loadImportFile(file, importFileSettings);
    console.log("[load import file]", data);

    const records = convertRecords(data);
    setPreviewRecords(records);

    console.log("[converted records]", records);
  };

  return (
    <div>
      <div>プレビュー</div>
      <div>
        <input type="file" accept=".csv" onChange={fileChangeHandler} />
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

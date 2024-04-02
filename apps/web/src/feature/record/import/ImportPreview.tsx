"use client";

import type { App, ImportFileHistory, Records } from "@feature/app/schema";
import { Table } from "@components/ui/v4/table";
import { ImportFilePicker } from "@feature/record/import/ImportFilePicker";
import { useImportFileSettings } from "@feature/record/import/useImportSettingsState";

export const ImportPreview = ({
  app,
  previewRecords,
  histories,
  setHistories,
  setPreviewRecords,
}: {
  app: App;
  previewRecords: Records;
  histories: ImportFileHistory[];
  setHistories: (histories: ImportFileHistory[]) => void;
  setPreviewRecords: (records: Records) => void;
}) => {
  const { importFileSettings } = useImportFileSettings();

  return (
    <div>
      <div>プレビュー</div>
      <ImportFilePicker
        appId={app.id}
        fields={app.fields}
        importFileSettings={importFileSettings}
        previewRecords={previewRecords}
        setHistories={setHistories}
        histories={histories}
        setPreviewRecords={setPreviewRecords}
      />
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

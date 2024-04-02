"use client";

import type { App, ImportFileHistory } from "@feature/app/schema";
import { Table } from "@components/ui/v4/table";
import { ImportFilePicker } from "@feature/record/import/ImportFilePicker";
import { useImportFileSettings } from "@feature/record/import/useImportSettingsState";
import { usePreviewRecords } from "@feature/record/import/usePreviewRecordsState";

export const ImportPreview = ({
  app,
  histories,
  setHistories,
}: {
  app: App;
  histories: ImportFileHistory[];
  setHistories: (histories: ImportFileHistory[]) => void;
}) => {
  const { importFileSettings } = useImportFileSettings();
  const { previewRecords, setPreviewRecords } = usePreviewRecords();

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

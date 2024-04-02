"use client";

import type { App } from "@feature/app/schema";
import { Table } from "@components/ui/v4/table";
import { ImportFilePicker } from "@feature/record/import/ImportFilePicker";
import { usePreviewRecords } from "@feature/record/import/usePreviewRecordsState";

export const ImportPreview = ({ app }: { app: App }) => {
  const { previewRecords } = usePreviewRecords();

  return (
    <div>
      <div>プレビュー</div>
      <ImportFilePicker appId={app.id} fields={app.fields} />
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

"use client";

import { Table } from "@components/ui/v4/table";
import { App } from "@oneforall/domain/schema/appSchema";
import { PreviewRecords } from "@oneforall/domain/schema/previewRecordsSchema";
import { ImportFilePickerClient } from "@pageComponents/appRecordImport/components/ImportFilePickerClient";
import { LookupRecords } from "@server/lookupRecords/type";

export const ImportPreview = ({
  app,
  previewRecords,
  lookupRecords,
}: {
  app: App;
  previewRecords: PreviewRecords;
  lookupRecords: LookupRecords;
}) => {
  return (
    <div>
      <ImportFilePickerClient
        appId={app.id}
        fields={app.fields}
        lookupRecords={lookupRecords}
      />
      <div>プレビュー</div>
      <div className={"flex space-x-4"}>
        <div>
          {Object.keys(previewRecords).length} 件のレコードを取り込みます。
        </div>
        <div>
          {
            "A -> B は、 [A: ファイルの値] から [B: アプリに合わせた値] に変換することを意味します。 "
          }
        </div>
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
                <Table.BodyTd
                  key={k + f}
                  bgColor={column.errorMessage ? "bg-red-200" : "bg-inherit"}
                >
                  {(column.originalValue &&
                  column.originalValue !== column.value
                    ? column.originalValue + " -> "
                    : "") + column.value}
                </Table.BodyTd>
              ))}
            </>
          )}
        />
      </Table>
    </div>
  );
};

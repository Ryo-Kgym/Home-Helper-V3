"use client";

import type { App } from "@feature/app/schema/app-schema";
import type { Record, Records } from "@feature/app/schema/record-schema";
import { useState } from "react";
import { AddRecordButton } from "@feature/app/show/AddRecordButton";
import { DeleteRecordButton } from "@feature/app/show/DeleteRecordButton";
import { RecordCell } from "@feature/app/show/RecordCell";
import { SaveRecordButton } from "@feature/app/show/SaveRecordButton";

export const ShowAppClient = ({
  app,
  recordTemplate,
  records: defaultRecords,
}: {
  app: App;
  recordTemplate: Record;
  records: Records;
}) => {
  const [records, setRecords] = useState<Records>(defaultRecords);
  const [newRecord, setNewRecord] = useState<Record>(recordTemplate);
  const [addingRecord, setAddingRecord] = useState<boolean>(false);

  return (
    <div className={"space-y-10"}>
      <div
        className={"flex w-full items-end space-x-5 border-b-2 border-gray-300"}
      >
        <div className={"text-3xl"}>{app.name}</div>
        <button>アプリ設定変更</button>
        <AddRecordButton
          addingRecord={addingRecord}
          setAddingRecord={setAddingRecord}
          records={records}
          setRecords={setRecords}
          recordTemplate={recordTemplate}
        />
      </div>
      <table>
        <thead>
          <tr className={"bg-gray-50"}>
            <td className={"border border-gray-300 p-2"}>{"ID"}</td>
            {Object.values(app.fields).map((field) => (
              <td
                key={field.fieldName}
                className={"border border-gray-300 p-2"}
              >
                {field.fieldName}
              </td>
            ))}
            <td className={"border border-gray-300 p-2"}>{""}</td>
          </tr>
        </thead>
        <tbody>
          {Object.entries(records).map(([recordId, record]) => (
            <tr key={recordId} className={"border border-gray-300"}>
              <td className={"border border-gray-300 p-2"}>{recordId}</td>
              {Object.entries(record).map(([fieldId, column]) => (
                <td key={fieldId} className={"border border-gray-300 p-2"}>
                  <RecordCell
                    column={column}
                    newRecord={newRecord}
                    setNewRecord={setNewRecord}
                  />
                </td>
              ))}
              <td className={"space-x-2 border border-gray-300 p-2"}>
                <SaveRecordButton
                  appId={app.id}
                  recordId={recordId}
                  records={records}
                  setRecords={setRecords}
                  newRecord={newRecord}
                  setNewRecord={setNewRecord}
                  addingRecord={addingRecord}
                  setAddingRecord={setAddingRecord}
                  recordTemplate={recordTemplate}
                />
                <DeleteRecordButton
                  recordId={recordId}
                  records={records}
                  setRecords={setRecords}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

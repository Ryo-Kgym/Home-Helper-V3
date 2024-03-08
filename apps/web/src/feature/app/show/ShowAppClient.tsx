"use client";

import type { App } from "@feature/app/schema/app-schema";
import type { Record, RecordList } from "@feature/app/schema/record-schema";
import { useState } from "react";
import { AddRecordButton } from "@feature/app/show/AddRecordButton";
import { RecordCell } from "@feature/app/show/RecordCell";

export const ShowAppClient = ({
  app,
  recordTemplate,
}: {
  app: App;
  recordTemplate: Record;
}) => {
  const [records, setRecords] = useState<RecordList>({});
  const [newRecord, setNewRecord] = useState<Record>(recordTemplate);
  const [addingRecord, setAddingRecord] = useState<boolean>(false);

  const saveRecordHandler = (recordId: string) => {
    setRecords({
      ...records,
      [recordId]: {
        ...Object.entries(newRecord).reduce(
          (acc, [fieldId, column]) => ({
            ...acc,
            [fieldId]: {
              ...column,
              confirmed: true,
            },
          }),
          {},
        ),
      },
    });
    setNewRecord(recordTemplate);
    setAddingRecord(false);
  };

  const deleteRecordHandler = (recordId: string) => {
    const newRecords = { ...records };
    delete newRecords[recordId];
    setRecords(newRecords);
  };

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
                <button onClick={() => saveRecordHandler(recordId)}>
                  保存
                </button>
                <button
                  onClick={() => deleteRecordHandler(recordId)}
                  className={"text-red-500"}
                >
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

"use client";

import type { App } from "@feature/app/schema/app-schema";
import type { Record, RecordList } from "@feature/app/schema/record-schema";
import { useState } from "react";
import { RecordCell } from "@feature/app/show/RecordCell";

export const ShowAppClient = ({ app }: { app: App }) => {
  const [records, setRecords] = useState<RecordList>({});
  const [newRecord, setNewRecord] = useState<Record>({
    1: {
      fieldId: "1",
      fieldKind: "text",
      value: "",
      confirmed: false,
    },
    2: {
      fieldId: "2",
      fieldKind: "selectBox",
      value: "",
      confirmed: false,
    },
    3: {
      fieldId: "3",
      fieldKind: "multipleText",
      value: "",
      confirmed: false,
    },
  });

  const addRecordHandler = () => {
    const newRecordId = Object.keys(records).length + 1;
    setRecords({
      ...records,
      [newRecordId]: {
        1: {
          fieldId: "1",
          fieldKind: "text",
          value: `aaa${newRecordId}`,
          confirmed: false,
        },
        2: {
          fieldId: "2",
          fieldKind: "selectBox",
          value: `bbb${newRecordId}`,
          confirmed: false,
        },
        3: {
          fieldId: "3",
          fieldKind: "multipleText",
          value: `ccc${newRecordId}`,
          confirmed: false,
        },
      },
    });
  };

  return (
    <div className={"space-y-10"}>
      <div
        className={"flex w-full items-end space-x-5 border-b-2 border-gray-300"}
      >
        <div className={"text-3xl"}>{app.name}</div>
        <button>アプリ設定変更</button>
        <button onClick={addRecordHandler}>レコード追加</button>
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
                <button>保存</button>
                <button>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

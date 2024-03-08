"use client";

import type { App } from "@feature/app/schema/app-schema";
import type { RecordList } from "@feature/app/schema/record-schema";
import { useState } from "react";

export const ShowAppClient = ({ app }: { app: App }) => {
  const [records, setRecords] = useState<RecordList>({
    1: {
      1: {
        fieldKind: "text",
        value: "aaa1",
      },
      2: {
        fieldKind: "text",
        value: "bbb1",
      },
    },
    2: {
      1: {
        fieldKind: "text",
        value: "aaa2",
      },
      2: {
        fieldKind: "text",
        value: "bbb2",
      },
    },
  });

  return (
    <div className={"space-y-10"}>
      <div
        className={"flex w-full items-end space-x-5 border-b-2 border-gray-300"}
      >
        <div className={"text-3xl"}>{app.name}</div>
        <button>アプリ設定変更</button>
        <button>レコード追加</button>
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
          </tr>
        </thead>
        <tbody>
          {Object.entries(records).map(([recordId, record]) => (
            <tr key={recordId} className={"border border-gray-300"}>
              <td className={"border border-gray-300 p-2"}>{recordId}</td>
              {Object.entries(record).map(([fieldId, field]) => (
                <td key={fieldId} className={"border border-gray-300 p-2"}>
                  {field.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

"use client";

import type { App } from "@feature/app/schema/app-schema";
import type { Record, Records } from "@feature/app/schema/record-schema";
import { useState } from "react";
import { AddRecordButton } from "@feature/app/show/AddRecordButton";
import { RedirectSettingButton } from "@feature/app/show/RedirectSettingButton";
import { ShowAppListRow } from "@feature/app/show/ShowAppListRow";

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

  const headerItems = [
    { key: "no", fieldName: "No." },
    ...Object.values(app.fields).map((field) => ({
      key: field.fieldIndex.toString(),
      fieldName: field.fieldName,
    })),
    { key: "actions", fieldName: "" },
  ];

  return (
    <div className={"space-y-10"}>
      <div
        className={"flex w-full items-end space-x-5 border-b-2 border-gray-300"}
      >
        <div className={"text-3xl"}>{app.name}</div>
        <RedirectSettingButton appId={app.id} />
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
            {headerItems.map(({ key, fieldName }) => (
              <td key={key} className={"border border-gray-300 p-2 font-bold"}>
                {fieldName}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(records).map(([recordIndex, record]) => (
            <ShowAppListRow
              key={record.recordId}
              record={record}
              recordIndex={parseInt(recordIndex)}
              newRecord={newRecord}
              setNewRecord={setNewRecord}
              app={app}
              records={records}
              setRecords={setRecords}
              addingRecord={addingRecord}
              setAddingRecord={setAddingRecord}
              recordTemplate={recordTemplate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

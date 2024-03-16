"use client";

import type { App } from "@feature/app/schema/app-schema";
import type { Record, Records } from "@feature/app/schema/record-schema";
import { useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { AddRecordButton } from "@feature/record/list/AddRecordButton";
import { RecordListRow } from "@feature/record/list/RecordListRow";
import { RedirectSettingButton } from "@feature/record/list/RedirectSettingButton";

export const RecordListClient = ({
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
      <Title>
        <div className={"text-3xl"}>{app.name}</div>
        <RedirectSettingButton appId={app.id} />
        <AddRecordButton
          addingRecord={addingRecord}
          setAddingRecord={setAddingRecord}
          records={records}
          setRecords={setRecords}
          recordTemplate={recordTemplate}
        />
      </Title>
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
            <RecordListRow
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

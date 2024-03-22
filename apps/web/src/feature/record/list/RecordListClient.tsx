"use client";

import type { App } from "@feature/app/schema/app-schema";
import type { Record, Records } from "@feature/app/schema/record-schema";
import { useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Table } from "@components/ui/v4/table";
import { AddRecordButton } from "@feature/nav/AddRecordButton";
import { RedirectImportButton } from "@feature/nav/RedirectImportButton";
import { RedirectSettingButton } from "@feature/nav/RedirectSettingButton";
import { RecordListRow } from "@feature/record/list/RecordListRow";

export type RecordListMode = "add" | "modify" | "show";

export const RecordListClient = ({
  app,
  recordTemplate,
  records: defaultRecords,
}: {
  app: App;
  recordTemplate: Record;
  records: Records;
}) => {
  const [records, setRecordsBase] = useState<Records>(
    structuredClone(defaultRecords),
  );
  const [newRecord, setNewRecord] = useState<Record>(recordTemplate);
  const [mode, setMode] = useState<RecordListMode>("show");

  const headerItems = [
    { name: "No." },
    ...Object.values(app.fields).map((field) => ({
      name: field.fieldName,
    })),
    { name: "" },
  ];

  const setRecords = (records: Records) =>
    setRecordsBase(structuredClone(records));

  return (
    <div className={"space-y-10"}>
      <Title>
        <div className={"text-3xl"}>{app.name}</div>
        <RedirectSettingButton appId={app.id} />
        <AddRecordButton
          mode={mode}
          setMode={setMode}
          records={records}
          setRecords={setRecords}
          recordTemplate={recordTemplate}
        />
        <RedirectImportButton appId={app.id} />
      </Title>
      <Table>
        <Table.Header headerItems={headerItems} />
        <Table.Body
          data={Object.entries(records)}
          renderItem={([recordIndex, record]) => (
            <RecordListRow
              key={record.recordId}
              record={record}
              recordIndex={parseInt(recordIndex)}
              newRecord={newRecord}
              setNewRecord={setNewRecord}
              app={app}
              records={records}
              setRecords={setRecords}
              mode={mode}
              setMode={setMode}
              recordTemplate={recordTemplate}
              defaultRecords={defaultRecords}
            />
          )}
        />
      </Table>
    </div>
  );
};

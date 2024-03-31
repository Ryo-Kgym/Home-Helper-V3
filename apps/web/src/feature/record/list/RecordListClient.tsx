"use client";

import type { App } from "@feature/app/schema/app-schema";
import type { Record, Records } from "@feature/app/schema/record-schema";
import type { ComponentProps } from "react";
import { useEffect, useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Table } from "@components/ui/v4/table";
import { AddRecordButton } from "@feature/nav/AddRecordButton";
import { RedirectImportButton } from "@feature/nav/RedirectImportButton";
import { RedirectSettingButton } from "@feature/nav/RedirectSettingButton";
import { RecordListRow } from "@feature/record/list/RecordListRow";
import { useResetMode } from "@feature/record/list/useModeState";
import { useStateRecords } from "@feature/record/list/useStateRecords";

export type RecordListMode = "add" | "modify" | "show";

export const RecordListClient = ({
  app,
  recordTemplate,
  records: defaultRecords,
  headerItems,
}: {
  app: App;
  recordTemplate: Record;
  records: Records;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
}) => {
  const { records, setRecords } = useStateRecords(defaultRecords);
  const [newRecord, setNewRecord] = useState<Record>(recordTemplate);

  const reset = useResetMode();

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className={"space-y-10"}>
      <Title title={app.name}>
        <RedirectSettingButton appId={app.id} />
        <AddRecordButton
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
              recordTemplate={recordTemplate}
            />
          )}
        />
      </Table>
    </div>
  );
};

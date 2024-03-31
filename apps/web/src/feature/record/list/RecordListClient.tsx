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
  columnsTemplate,
  records: defaultRecords,
  headerItems,
}: {
  app: App;
  columnsTemplate: Record;
  records: Records;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
}) => {
  const { records, setRecords } = useStateRecords(defaultRecords);
  const [newColumns, setNewColumns] = useState<Record>(columnsTemplate);

  const reset = useResetMode();

  useEffect(
    () => {
      reset();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className={"space-y-10"}>
      <Title title={app.name}>
        <RedirectSettingButton appId={app.id} />
        <AddRecordButton
          records={records}
          setRecords={setRecords}
          columnTemplate={columnsTemplate}
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
              newRecord={newColumns}
              setNewRecord={setNewColumns}
              app={app}
              records={records}
              setRecords={setRecords}
              columnsTemplate={columnsTemplate}
            />
          )}
        ></Table.Body>
      </Table>
    </div>
  );
};

"use client";

import type { App } from "@oneforall/domain/schema/appSchema";
import { ComponentProps, useEffect } from "react";
import { Table } from "@components/ui/v4/table";
import { NewRecordListRowClient } from "@features/appRecordList/components/table/NewRecordListRowClient";
import { RecordListRowClient } from "@features/appRecordList/components/table/RecordListRowClient";
import { useResetMode } from "@hooks/states/app/recordListMode/useModeStateZustand";
import { useInitRecords } from "@hooks/states/app/records/useInitRecords";
import { useRecords } from "@hooks/states/app/records/useRecords";
import { Records } from "@oneforall/domain/schema/recordSchema";

export const RecordListTableClient = ({
  app,
  headerItems,
  records: defaultRecords,
  uneditable,
}: {
  app: App;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
  records: Records;
  uneditable?: boolean;
}) => {
  const { records } = useRecords();
  const initialize = useInitRecords();
  const resetMode = useResetMode();

  useEffect(
    () => {
      initialize(defaultRecords);
      resetMode();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Table>
      <Table.Header headerItems={headerItems} />
      <Table.Body
        data={Object.entries(records)}
        renderItem={([recordIndex, record]) => (
          <RecordListRowClient
            key={record.recordId}
            record={record}
            recordIndex={parseInt(recordIndex)}
            app={app}
            uneditable={uneditable}
          />
        )}
      >
        <NewRecordListRowClient app={app} />
      </Table.Body>
    </Table>
  );
};

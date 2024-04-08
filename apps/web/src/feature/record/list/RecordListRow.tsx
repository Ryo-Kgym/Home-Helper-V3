import { Table } from "@components/ui/v4/table";
import { RecordCell } from "@feature/record/list/cell/RecordCell";
import { RecordRowOperation } from "@feature/record/list/operation/RecordRowOperation";
import { useStateRecord } from "@feature/record/list/useStateRecord";
import { useState } from "react";

import type { App, Records } from "@feature/app/schema";
import type { RecordListMode } from "@feature/record/list/RecordListClient";

export const RecordListRow = ({
  record: defaultRecord,
  recordIndex,
  app,
}: {
  record: Records[number];
  recordIndex: number;
  app: App;
}) => {
  const { record, setRecord } = useStateRecord(defaultRecord);
  const [mode, setMode] = useState<RecordListMode>("show");

  return (
    <>
      <Table.BodyTd align={"right"}>{recordIndex}</Table.BodyTd>
      {Object.values(app.fields).map((field) => (
        <Table.BodyTd key={field.id}>
          <RecordCell
            record={record}
            field={field}
            mode={mode}
            column={record.columns[field.id]}
            setRecord={setRecord}
          />
        </Table.BodyTd>
      ))}
      <Table.BodyTd>
        <RecordRowOperation
          record={record}
          mode={mode}
          setMode={setMode}
          recordId={record.recordId}
          setRecord={setRecord}
          defaultRecord={defaultRecord}
        />
      </Table.BodyTd>
    </>
  );
};

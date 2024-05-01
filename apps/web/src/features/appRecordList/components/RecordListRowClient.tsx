import { useState } from "react";
import { Table } from "@components/ui/v4/table";
import { useStateRecord } from "@features/appRecordList/client/useStateRecord";
import { RecordCell } from "@features/appRecordList/components/cell/RecordCell";
import { RecordRowOperation } from "@features/appRecordList/components/operation/RecordRowOperation";
import { RecordListMode } from "@features/appRecordList/types/recordListMode";
import { App } from "@oneforall/domain/schema/appSchema";
import { Record } from "@oneforall/domain/schema/recordSchema";

export const RecordListRowClient = ({
  record: defaultRecord,
  recordIndex,
  app,
}: {
  record: Record;
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

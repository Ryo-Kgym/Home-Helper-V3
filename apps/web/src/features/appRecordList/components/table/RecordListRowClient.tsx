import { useState } from "react";
import { App } from "@oneforall/domain/schema/appSchema";
import { Record } from "@oneforall/domain/schema/recordSchema";

import { Table } from "~/components/ui/v4/table";
import { useStateRecord } from "../../client/useStateRecord";
import { RecordListMode } from "../../types/recordListMode";
import { RecordCell } from "../cell/RecordCell";
import { RecordRowOperation } from "../operation/RecordRowOperation";

export const RecordListRowClient = ({
  record: defaultRecord,
  recordIndex,
  app,
  uneditable,
}: {
  record: Record;
  recordIndex: number;
  app: App;
  uneditable?: boolean;
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
          uneditable={uneditable}
        />
      </Table.BodyTd>
    </>
  );
};

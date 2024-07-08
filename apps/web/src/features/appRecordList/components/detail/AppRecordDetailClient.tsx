"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ModifyCell } from "@features/appRecordList/components/cell/ModifyCell";
import { UpdateRecordButton } from "@features/appRecordList/components/operation/UpdateRecordButton";
import { Fields } from "@oneforall/domain/schema/appSchema";
import { Record } from "@oneforall/domain/schema/recordSchema";

export const AppRecordDetailClient = ({
  fields,
  record: defaultRecord,
}: {
  fields: Fields;
  record: Record;
}) => {
  const [record, setRecord] = useState(defaultRecord);
  const { refresh } = useRouter();

  return (
    <div className={"space-y-10"}>
      <div className={"space-y-10"}>
        {Object.entries(fields).map(([fieldId, field]) => (
          <div key={fieldId}>
            <div>{field.fieldName}</div>
            <ModifyCell
              field={field}
              record={record}
              setRecord={setRecord}
              column={record.columns[field.id]}
            />
          </div>
        ))}
      </div>
      <div className={"flex justify-end"}>
        <UpdateRecordButton
          record={record}
          setMode={() => undefined}
          afterHandler={refresh}
        />
      </div>
    </div>
  );
};

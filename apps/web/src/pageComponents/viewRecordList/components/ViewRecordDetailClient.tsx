"use client";

import { useRouter } from "next/navigation";
import { Drawer } from "@components/ui/v4/drawer";
import { AppRecordDetail } from "@features/appRecordList/components/AppRecordDetail";
import { Fields } from "@oneforall/domain/schema/appSchema";
import { Record } from "@oneforall/domain/schema/recordSchema";

export const ViewRecordDetailClient = ({
  existsRecordId,
  fields,
  record,
}: {
  existsRecordId: boolean;
  fields: Fields;
  record: Record | undefined;
}) => {
  const { back } = useRouter();

  return (
    <Drawer opened={existsRecordId} onClose={back}>
      {record ? (
        <AppRecordDetail fields={fields} record={record} />
      ) : (
        <NoData />
      )}
    </Drawer>
  );
};

const NoData = () => {
  return <div>データが存在しません。</div>;
};

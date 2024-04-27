"use client";

import { ComponentProps, useEffect } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Table } from "@components/ui/v4/table";
import { RedirectViewSettingButton } from "@feature/view/nav/RedirectViewSettingButton";
import { useInitViewRecords } from "@feature/view/recordList/useViewRecordsState";
import { ViewRecordListTable } from "@feature/view/recordList/ViewRecordListTable";
import { ViewRecords } from "@oneforall/domain/schema/view/view-record-schema";
import { View } from "@oneforall/domain/schema/view/view-schema";

export const ViewRecordListClient = ({
  view,
  records: defaultRecords,
  headerItems,
}: {
  view: View;
  records: ViewRecords;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
}) => {
  const initialize = useInitViewRecords();

  useEffect(
    () => {
      initialize(defaultRecords);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className={"space-y-10"}>
      <Title title={view.name}>
        <RedirectViewSettingButton viewId={view.id} />
      </Title>
      <ViewRecordListTable view={view} headerItems={headerItems} />
    </div>
  );
};

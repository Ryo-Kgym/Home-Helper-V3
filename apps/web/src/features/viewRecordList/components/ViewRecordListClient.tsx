"use client";

import { ComponentProps, useEffect } from "react";
import { Table } from "@components/ui/v4/table";
import { useInitViewRecords } from "@features/viewRecordList/client/useViewRecordsState";
import { ViewRecordListTable } from "@features/viewRecordList/components/ViewRecordListTable";
import { ViewRecords } from "@oneforall/domain/schema/view/viewRecordSchema";
import { View } from "@oneforall/domain/schema/view/viewSchema";

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
    [defaultRecords],
  );

  return <ViewRecordListTable view={view} headerItems={headerItems} />;
};

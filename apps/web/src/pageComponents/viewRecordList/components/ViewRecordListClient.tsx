"use client";

import { ComponentProps, useEffect, useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Modal } from "@components/ui/v4/modal";
import { Table } from "@components/ui/v4/table";
import { OpenViewFilterButton } from "@features/viewNav/OpenViewFilterButton";
import { RedirectViewSettingButton } from "@features/viewNav/RedirectViewSettingButton";
import { useInitViewRecords } from "@features/viewRecordList/client/useViewRecordsState";
import { ViewRecordListTable } from "@features/viewRecordList/components/ViewRecordListTable";
import { ViewRecordFilterSetting } from "@features/viewRecordListFilter/components/ViewRecordFilterSetting";
import { ViewFilters } from "@oneforall/domain/schema/view/viewFilterSchema";
import { ViewRecords } from "@oneforall/domain/schema/view/viewRecordSchema";
import { View } from "@oneforall/domain/schema/view/viewSchema";

export const ViewRecordListClient = ({
  view,
  records: defaultRecords,
  viewFilters: defaultViewFilters,
  headerItems,
}: {
  view: View;
  records: ViewRecords;
  viewFilters: ViewFilters | undefined;
  headerItems: ComponentProps<typeof Table.Header>["headerItems"];
}) => {
  const initialize = useInitViewRecords();
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  useEffect(
    () => {
      initialize(defaultRecords);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [defaultRecords],
  );

  return (
    <div className={"space-y-10"}>
      <Title title={view.name}>
        <RedirectViewSettingButton viewId={view.id} />
        <OpenViewFilterButton onClose={() => setIsOpenFilter(!isOpenFilter)} />
      </Title>
      <ViewRecordListTable view={view} headerItems={headerItems} />
      <Modal isOpen={isOpenFilter} onClose={() => setIsOpenFilter(false)}>
        <ViewRecordFilterSetting
          view={view}
          defaultViewFilters={defaultViewFilters}
        />
      </Modal>
    </div>
  );
};

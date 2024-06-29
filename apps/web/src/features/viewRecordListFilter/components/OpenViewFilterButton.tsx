"use client";

import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Modal } from "@components/ui/v4/modal";
import { RecordFilters } from "@oneforall/domain/schema/filter/recordFiltersSchema";
import { View } from "@oneforall/domain/schema/view/viewSchema";

import { ViewRecordFilterSetting } from "./ViewRecordFilterSetting";

export const OpenViewFilterButton = ({
  view,
  viewFilters: defaultViewFilters,
}: {
  view: View;
  viewFilters: RecordFilters | undefined;
}) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <>
      <Button
        label={"フィルター"}
        clickHandler={() => setIsOpenFilter(!isOpenFilter)}
        type={"display"}
      />
      <div>
        <Modal isOpen={isOpenFilter} onClose={() => setIsOpenFilter(false)}>
          <ViewRecordFilterSetting
            view={view}
            defaultViewFilters={defaultViewFilters}
          />
        </Modal>
      </div>
    </>
  );
};

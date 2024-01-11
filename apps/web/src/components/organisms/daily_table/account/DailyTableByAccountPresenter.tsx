/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { DailyTable, UpdateDetail } from "@components/organisms";
import { TableProps } from "@components/ui";
import { DailyDetail } from "@domain/model/household/DailyDetail";

export const DailyTableByAccountPresenter = ({
  tableProps,
  incomeTotal,
  outcomeTotal,
  modifyModalOpen,
  modifyOnClose,
  detailForUpdate,
}: {
  tableProps: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
  modifyModalOpen: boolean;
  modifyOnClose: () => void;
  detailForUpdate: DailyDetail | null;
}) => (
  <div>
    <DailyTable
      tablePropsList={tableProps}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
    <UpdateDetail
      initData={detailForUpdate}
      isOpen={modifyModalOpen}
      onCloseHandler={modifyOnClose}
    />
  </div>
);

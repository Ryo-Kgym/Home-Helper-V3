/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TableProps } from "@components/atoms/Table";
import { RangeDatePicker } from "components/ui/date";
import { UpdateDetail } from "@components/organisms/";
import { DailyDetail } from "@domain/model/household/DailyDetail";
import { DailyTable } from "@components/organisms/daily_table/DailyTable";

type DailySearchPresenterProps = {
  fromDate: Date | null;
  changeFromDate: (_: Date) => void;
  toDate: Date | null;
  changeToDate: (_: Date) => void;
  tablePropsList: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
  disabled: boolean;
  modifyModalOpen: boolean;
  modifyOnClose: () => void;
  detailForUpdate: DailyDetail | null;
};
export const DailySearchPresenter = ({
  fromDate,
  changeFromDate,
  toDate,
  changeToDate,
  tablePropsList,
  incomeTotal,
  outcomeTotal,
  disabled,
  modifyModalOpen,
  modifyOnClose,
  detailForUpdate,
}: DailySearchPresenterProps) => (
  <div>
    <RangeDatePicker
      fromDate={fromDate}
      changeFromDate={changeFromDate}
      toDate={toDate}
      changeToDate={changeToDate}
      disabled={disabled}
    />
    <DailyTable
      tablePropsList={tablePropsList}
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

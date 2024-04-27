/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Table } from "@components/atoms/Table";
import { RangeMonthPicker } from "@components/molecules/RangeMonthPicker";

import type { TableProps } from "@components/atoms/Table";

export const DepositPresenter = ({
  fromMonth,
  changeFromMonth,
  toMonth,
  changeToMonth,
  header,
  tablePropsList,
}: {
  fromMonth: Date | null;
  changeFromMonth: (date: Date | null) => void;
  toMonth: Date | null;
  changeToMonth: (date: Date | null) => void;
  header: string[];
  tablePropsList: TableProps[];
}) => (
  <div>
    <RangeMonthPicker
      fromMonth={fromMonth}
      changeFromMonth={changeFromMonth}
      toMonth={toMonth}
      changeToMonth={changeToMonth}
    />
    <Table header={header} tablePropsList={tablePropsList} size={"sm"} />
  </div>
);

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Table, TableProps } from "@components/atoms/Table";
import { RangeMonthPicker } from "@components/molecules/RangeMonthPicker";

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

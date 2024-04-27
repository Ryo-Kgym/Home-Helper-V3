/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TableProps } from "@components/atoms/Table";
import { Table } from "@components/atoms/Table/index";
import { Total } from "@components/molecules/Total/index";
import { RangeDatePicker } from "@components/ui/date";

type AccountPresenterProps = {
  fromDate: Date | null;
  changeFromDate: (_: Date | null) => void;
  toDate: Date | null;
  changeToDate: (_: Date | null) => void;
  tableProps: TableProps[];
  total: number | undefined;
};
export const AccountPresenter = ({
  fromDate,
  changeFromDate,
  toDate,
  changeToDate,
  tableProps,
  total,
}: AccountPresenterProps) => (
  <div>
    <RangeDatePicker
      fromDate={fromDate}
      changeFromDate={changeFromDate}
      toDate={toDate}
      changeToDate={changeToDate}
    />
    <Table
      header={["アカウント", "残高"]}
      tablePropsList={tableProps}
      height={"55vh"}
      size={"xs"}
    />
    <Total total={total} />
  </div>
);

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Total } from "@components/molecules/Total";
import { RangeDatePicker } from "@components/ui/date";
import { DataTable } from "@components/ui/v4/table";

import { AccountTableRow } from "./type";

export const AccountPresenter = ({
  fromDate,
  changeFromDate,
  toDate,
  changeToDate,
  total,
  records,
  onRowClick,
}: {
  fromDate: Date | null;
  changeFromDate: (_: Date | null) => void;
  toDate: Date | null;
  changeToDate: (_: Date | null) => void;
  total: number | undefined;
  records: AccountTableRow[];
  onRowClick: (record: AccountTableRow) => void;
}) => (
  <div>
    <RangeDatePicker
      fromDate={fromDate}
      changeFromDate={changeFromDate}
      toDate={toDate}
      changeToDate={changeToDate}
    />
    <DataTable
      columns={[
        { accessor: "accountName", title: "アカウント", width: "50%" },
        {
          accessor: "balance",
          title: "残高",
          width: "50%",
          textAlign: "right",
          render: ({ balance }) => balance.toLocaleString(),
        },
      ]}
      records={records}
      onRowClick={onRowClick}
    />
    <Total total={total} />
  </div>
);

/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import type { TableProps } from "@components/atoms/Table";
import { Table } from "@components/atoms/Table";
import { IocomeTotal } from "@components/molecules/Total";

export const DailyTable = ({
  tablePropsList,
  incomeTotal,
  outcomeTotal,
}: {
  tablePropsList: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
}) => (
  <>
    <Table
      header={["日付", "カテゴリ", "アカウント", "金額", "メモ"]}
      tablePropsList={tablePropsList}
      size={"xs"}
      height={"85vh"}
      toBottom
    />
    <IocomeTotal income={incomeTotal} outcome={outcomeTotal} />
  </>
);

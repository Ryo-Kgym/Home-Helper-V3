/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Table } from "@components/atoms/Table/index";

import type { ColumnProps, TableProps } from "@components/atoms/Table";

export const MonthlyCategoryPresenter = ({
  tablePropsList,
  footer,
  monthNames,
}: {
  tablePropsList: TableProps[];
  footer: ColumnProps[][];
  monthNames: string[];
}) => (
  <div>
    <Table
      header={["カテゴリ"].concat(monthNames).concat("合計")}
      tablePropsList={tablePropsList}
      footer={footer}
      size={"xs"}
      height={"70vh"}
      toBottom
      defaultBottom={false}
    />
  </div>
);

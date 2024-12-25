"use client";

import { Table, TableProps } from "../../../components/atoms/Table";

export const CategoryListPresenter = ({
  tablePropsList,
}: {
  tablePropsList: TableProps[];
}) => (
  <Table
    header={["カテゴリ名", "ジャンル名", "有効・無効", "表示順"]}
    tablePropsList={tablePropsList}
    size={"xs"}
    defaultBottom={false}
  />
);

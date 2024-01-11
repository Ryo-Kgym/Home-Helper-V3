/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { Table, TableProps } from "@components/atoms/Table";

export const Presenter_ = ({
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

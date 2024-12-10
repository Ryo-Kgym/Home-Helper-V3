/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Table, TableProps } from "../../atoms/Table";
import { Button } from "../../ui";

export const Presenter_ = ({
  summary,
  tableProps,
  addHandler,
  backHandler,
}: {
  summary: {
    id: string;
    creditCard: string;
    withdrawalDate: Date;
    accountName: string;
    totalAmount: number;
    count: number;
  };
  tableProps: TableProps[];
  addHandler: () => void;
  backHandler: () => void;
}) => (
  <div className={"space-y-3"}>
    <div className={"flex space-x-5 p-3 text-2xl"}>
      <div>カード： {summary.creditCard}</div>
      <div>引落日： {summary.withdrawalDate.toLocaleDateString()}</div>
      <div>アカウント： {summary.accountName}</div>
      <div>{summary.count}件</div>
      <div>{summary.totalAmount.toLocaleString()}円</div>
    </div>
    <div className={"grid grid-cols-2"}>
      <Button type={"back"} onClick={backHandler} />
      <Button type={"add"} onClick={addHandler} />
    </div>
    <Table
      header={["日付", "ジャンル", "カテゴリ", "金額", "メモ"]}
      tablePropsList={tableProps}
      size={"xs"}
      toBottom
      height={"80vh"}
      defaultBottom={false}
    />
  </div>
);

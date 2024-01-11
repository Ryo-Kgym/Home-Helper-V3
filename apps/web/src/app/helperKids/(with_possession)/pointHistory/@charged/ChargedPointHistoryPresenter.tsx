/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Table, TableProps } from "@components/atoms/Table/index";

type ChargedPointHistoryPresenterProps = {
  tableProps: TableProps[];
};

const header = ["日付", "項目", "件数", "ためたポイント"];

export const ChargedPointHistoryPresenter = ({
  tableProps,
}: ChargedPointHistoryPresenterProps) => (
  <Table header={header} tablePropsList={tableProps} size={"md"} />
);

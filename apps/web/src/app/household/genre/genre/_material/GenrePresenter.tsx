/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Table, TableProps } from "@components/atoms/Table/index";
import { IocomeTotal } from "@components/molecules/Total/index";
import { RangeMonthPicker } from "@components/molecules/RangeMonthPicker/index";

type CategoryPresenterProps = {
  fromMonth: Date | null;
  changeFromMonth: (_: Date | null) => void;
  toMonth: Date | null;
  changeToMonth: (_: Date | null) => void;
  tableProps: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
};
export const GenrePresenter = ({
  fromMonth,
  changeFromMonth,
  toMonth,
  changeToMonth,
  tableProps,
  incomeTotal,
  outcomeTotal,
}: CategoryPresenterProps) => {
  return (
    <div>
      <RangeMonthPicker
        fromMonth={fromMonth}
        changeFromMonth={changeFromMonth}
        toMonth={toMonth}
        changeToMonth={changeToMonth}
      />
      <Table
        header={["ジャンル", "金額"]}
        tablePropsList={tableProps}
        size={"xs"}
        height={"75vh"}
      />
      <IocomeTotal income={incomeTotal} outcome={outcomeTotal} />
    </div>
  );
};

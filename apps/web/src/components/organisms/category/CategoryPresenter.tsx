import { Table, TableProps } from "@components/atoms/Table";
import { IocomeTotal } from "@components/molecules/Total";
import { RangeMonthPicker } from "@components/molecules/RangeMonthPicker";

type CategoryPresenterProps = {
  fromMonth: Date | null;
  changeFromMonth: (_: Date | null) => void;
  toMonth: Date | null;
  changeToMonth: (_: Date | null) => void;
  tableProps: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
};
export const CategoryPresenter = ({
  fromMonth,
  changeFromMonth,
  toMonth,
  changeToMonth,
  tableProps,
  incomeTotal,
  outcomeTotal,
}: CategoryPresenterProps) => (
  <div>
    <RangeMonthPicker
      fromMonth={fromMonth}
      changeFromMonth={changeFromMonth}
      toMonth={toMonth}
      changeToMonth={changeToMonth}
    />
    <Table
      header={["ジャンル", "カテゴリ", "金額"]}
      tablePropsList={tableProps}
      size={"xs"}
      height={"75vh"}
    />
    <IocomeTotal income={incomeTotal} outcome={outcomeTotal} />
  </div>
);

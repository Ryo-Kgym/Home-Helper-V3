"use client";

import { FC } from "react";

import { FormatPrice } from "../../../components/molecules/FormatPrice";
import { DataTable } from "../../../components/ui/v4/table";
import { IocomeType } from "../../../domain/model/household/IocomeType";

type ColumnAttribute = {
  title: string;
};

type Props = {
  iocomeType: IocomeType;
  columns: Record<string, ColumnAttribute>;
  records: ({ id: string; categoryName: string; total: number } & Record<
    string,
    number
  >)[];
};

export const MonthlySummaryTable: FC<Props> = ({
  iocomeType,
  columns,
  records,
}) => {
  return (
    <DataTable<(typeof records)[number]>
      columns={[
        {
          accessor: "id",
          title: "ID",
          hidden: true,
        },
        {
          accessor: "categoryName",
          title: "カテゴリ",
          width: 150,
        },
        ...Object.entries(columns).map(([yyyyMM, attr]) => ({
          accessor: yyyyMM,
          title: attr.title,
          width: 100,
          textAlign: "right" as const,
          // @ts-expect-error render is not defined
          render: ({ [yyyyMM]: amount }) => (
            <FormatPrice price={amount} iocomeType={iocomeType} />
          ),
        })),
        {
          accessor: "total",
          title: "合計",
          width: 100,
          textAlign: "right",
          render: ({ total }) => (
            <FormatPrice price={total} iocomeType={iocomeType} />
          ),
        },
      ]}
      records={records}
      recordsPerPage={1000}
      height={"45vh"}
    />
  );
};

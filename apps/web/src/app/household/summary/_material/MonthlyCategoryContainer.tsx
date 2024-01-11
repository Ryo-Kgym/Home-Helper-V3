/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { MonthlyCategoryPresenter } from "@app/household/summary/_material/MonthlyCategoryPresenter";
import { ColumnProps, TableProps } from "@components/atoms/Table";
import { FormatPrice } from "@components/molecules/FormatPrice/index";
import { IocomeType } from "@domain/model/household/IocomeType";
import { TotalAmountByMonthly } from "@function/monthly/totalAmountByMonthly";
import { MonthlyCategoryKey } from "@hooks/household/summary_category/useFetchSummaryCategoryAmount";

export const MonthlyCategoryContainer = ({
  data,
  incomeTotal,
  outcomeTotal,
  monthNames,
}: {
  data: TotalAmountByMonthly<MonthlyCategoryKey>[];
  incomeTotal: TotalAmountByMonthly<MonthlyCategoryKey>;
  outcomeTotal: TotalAmountByMonthly<MonthlyCategoryKey>;
  monthNames: string[];
}) => {
  const tablePropsList: TableProps[] = data.map((d) => ({
    keyPrefix: d.key.categoryName,
    columns: [
      {
        value: d.key.categoryName as any,
        align: "left",
      },
    ]
      .concat(
        d.monthlyTotal.map((mt) => ({
          value: <FormatPrice iocomeType={d.key.iocomeType} price={mt} />,
          align: "right",
        })),
      )
      .concat([
        {
          value: (
            <div className={"font-bold"}>
              <FormatPrice iocomeType={d.key.iocomeType} price={d.total} />
            </div>
          ),
          align: "right",
        },
      ]) as ColumnProps[],
  }));

  const incomeFooter = createFooter(incomeTotal, IocomeType.Income);
  const outcomeFooter = createFooter(outcomeTotal, IocomeType.Outcome);

  const diff: ColumnProps[] = incomeTotal.monthlyTotal.map((mt, idx) => {
    return {
      value: Number(mt - outcomeTotal.monthlyTotal[idx]).toLocaleString(),
      align: "right",
    };
  });
  const diffFooter: ColumnProps[] = [
    { value: "残金", align: "center" },
    ...diff,
    {
      value: Number(incomeTotal.total - outcomeTotal.total).toLocaleString(),
      align: "right",
    },
  ];

  return (
    <MonthlyCategoryPresenter
      tablePropsList={tablePropsList}
      footer={[incomeFooter, outcomeFooter, diffFooter]}
      monthNames={monthNames}
    />
  );
};

const createFooter = (
  totalByMonthly: TotalAmountByMonthly<MonthlyCategoryKey>,
  iocomeType: IocomeType,
): ColumnProps[] => {
  const ioMap = new Map([
    [IocomeType.Income, "収入"],
    [IocomeType.Outcome, "支出"],
  ]);
  const { monthlyTotal, total } = totalByMonthly;

  const dataColumns: ColumnProps[] = monthlyTotal.map((mt) => ({
    value: <FormatPrice iocomeType={iocomeType} price={mt} />,
    align: "right",
  }));

  return [
    { value: ioMap.get(iocomeType) + "合計", align: "center" },
    ...dataColumns,
    {
      value: <FormatPrice iocomeType={iocomeType} price={total} />,
      align: "right",
    },
  ];
};

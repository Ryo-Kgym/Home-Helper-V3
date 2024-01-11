/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Table, TableProps } from "@components/atoms/Table";
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
    <div className={"max-sm:hidden"}>
      <Table
        header={["日付", "カテゴリ", "アカウント", "金額", "メモ"]}
        tablePropsList={tablePropsList}
        size={"xs"}
        height={"75vh"}
        toBottom
      />
    </div>
    <div className={"sm:hidden"}>
      <Table
        header={[]}
        tablePropsList={tablePropsList.map((t) => {
          return {
            keyPrefix: t.keyPrefix,
            columns: [
              {
                value: (
                  <div className={"grid grid-cols-2"}>
                    <div>{t.columns[0].value}</div>
                    <div>{t.columns[1].value}</div>
                    <div>{t.columns[2].value}</div>
                    <div className={"text-end"}>{t.columns[3].value}</div>
                  </div>
                ),
                align: "left",
                hidden: false,
              },
            ],
            onClick: t.onClick,
          };
        })}
        size={"xs"}
        height={"63vh"}
        toBottom
      />
    </div>
    <IocomeTotal income={incomeTotal} outcome={outcomeTotal} />
  </>
);

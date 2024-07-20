"use client";

import { DataTable } from "@components/ui/v4/table";
import { IocomeType } from "@domain/model/household/IocomeType";
import { colors } from "@styles/colors";

export const ChartDetailTableClient = ({
  records,
}: {
  records: {
    id: string;
    withdrawalDate: string;
    settlementDate: string;
    amount: number;
    iocomeType: IocomeType;
    accountName: string;
    genreName: string;
    categoryName: string;
    memo: string;
    isDeposit: boolean;
  }[];
}) => {
  return (
    <DataTable
      columns={[
        { accessor: "withdrawalDate", title: "引落日", width: "100" },
        { accessor: "settlementDate", title: "決済日", width: "100" },
        { accessor: "iocomeType", hidden: true },
        {
          accessor: "amount",
          title: "金額",
          textAlign: "right",
          width: "100",
          render: ({ iocomeType, amount, isDeposit }) => {
            const style = (() => {
              if (isDeposit)
                return {
                  backgroundColor: colors.balance.deposit,
                };
              switch (iocomeType) {
                case IocomeType.Income:
                  return {
                    color: colors.balance.income,
                  };
                case IocomeType.Outcome:
                  return {
                    color: colors.balance.outcome,
                  };
              }
            })();

            return <div style={style}>{amount.toLocaleString()}</div>;
          },
        },
        { accessor: "accountName", title: "アカウント" },
        { accessor: "genreName", title: "ジャンル" },
        { accessor: "categoryName", title: "カテゴリ" },
        { accessor: "memo", title: "メモ" },
        { accessor: "isDeposit", hidden: true },
      ]}
      records={records}
      height="45vh"
      recordsPerPage={200}
    />
  );
};

"use client";

import { DataTable } from "@components/ui/v4/table";
import { IocomeType } from "@domain/model/household/IocomeType";
import { colors } from "@styles/colors";

export const ChartDetailTablePageClient = ({
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
  }[];
}) => {
  return (
    <div>
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
            render: ({ iocomeType, amount }) => {
              return iocomeType === IocomeType.Income ? (
                <div
                  style={{
                    color: colors.balance.income,
                  }}
                >
                  {amount.toLocaleString()}
                </div>
              ) : (
                <div
                  style={{
                    color: colors.balance.outcome,
                  }}
                >
                  {amount.toLocaleString()}
                </div>
              );
            },
          },
          { accessor: "accountName", title: "アカウント" },
          { accessor: "genreName", title: "ジャンル" },
          { accessor: "categoryName", title: "カテゴリ" },
          { accessor: "memo", title: "メモ" },
        ]}
        records={records}
        height="45vh"
        recordsPerPage={200}
      />
    </div>
  );
};

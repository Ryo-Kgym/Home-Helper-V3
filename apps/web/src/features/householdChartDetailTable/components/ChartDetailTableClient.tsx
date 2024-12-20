"use client";

import { ComponentProps, useState } from "react";

import { UpdateDetail } from "../../../components/organisms";
import { DataTable } from "../../../components/ui/v4/table";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { colors } from "../../../styles/colors";

export const ChartDetailTableClient = ({
  records,
}: {
  records: {
    id: string;
    type: string;
    withdrawalDate: string;
    settlementDate: string;
    amount: number;
    iocomeType: IocomeType;
    accountId: string;
    accountName: string;
    genreId: string;
    genreName: string;
    categoryId: string;
    categoryName: string;
    memo: string;
    isDeposit: boolean;
  }[];
}) => {
  const [detail, setDetail] =
    useState<ComponentProps<typeof UpdateDetail>["initData"]>(null);

  return (
    <>
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
        onRowClick={(detail) => {
          if (detail.type === "creditCard") return;

          setDetail({
            id: detail.id,
            date: new Date(detail.settlementDate),
            iocomeType: detail.iocomeType,
            genreId: detail.genreId,
            categoryId: detail.categoryId,
            accountId: detail.accountId,
            amount: detail.amount,
            memo: detail.memo,
          });
        }}
      />
      <UpdateDetail
        initData={detail}
        isOpen={!!detail}
        onCloseHandler={() => setDetail(null)}
      />
    </>
  );
};

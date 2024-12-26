"use client";

import { FC } from "react";

import { FormatPrice } from "../../../components/molecules/FormatPrice";
import { TagGroup } from "../../../components/ui/tag/TagGroup";
import { DataTable } from "../../../components/ui/v4/table";
import { SearchRow } from "../types/searchRow";

type Props = {
  records: SearchRow[];
};

export const SearchListTable: FC<Props> = ({ records }) => {
  return (
    <DataTable
      columns={[
        { accessor: "settlementDate", title: "決済日", width: 120 },
        { accessor: "withdrawalDate", title: "引落日", width: 120 },
        {
          accessor: "amount",
          title: "金額",
          textAlign: "right",
          width: 100,
          render: (record) => {
            return (
              <FormatPrice
                iocomeType={record.iocomeType}
                price={record.amount}
              />
            );
          },
        },
        { accessor: "genreName", title: "ジャンル" },
        { accessor: "categoryName", title: "カテゴリ" },
        { accessor: "accountName", title: "口座" },
        {
          accessor: "memo",
          title: "メモ",
          render: (record) => {
            return (
              <>
                <TagGroup tags={record.tags} />
                {record.memo}
              </>
            );
          },
        },
      ]}
      records={records.map((r) => ({
        id: r.id,
        settlementDate: r.settlementDate,
        withdrawalDate: r.withdrawalDate,
        amount: r.amount,
        genreName: r.genre.name,
        iocomeType: r.genre.iocomeType,
        categoryName: r.category.name,
        accountName: r.account.name,
        memo: r.memo,
        tags: r.tags.map((tag) => ({
          id: tag.id,
          label: tag.name,
          colorCode: tag.colorCode,
        })),
      }))}
      recordsPerPage={200}
    />
  );
};

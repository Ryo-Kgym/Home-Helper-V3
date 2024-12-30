"use client";

import { useState } from "react";

import { FormatPrice } from "../../../components/molecules/FormatPrice";
import { IocomeTotal } from "../../../components/molecules/Total";
import { TagGroup } from "../../../components/ui/tag/TagGroup";
import { DataTable } from "../../../components/ui/v4/table";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { DailyDetailEditModal } from "../../householdModifyDailyDetail/components/DailyDetailEditModal";
import { DailyBalanceRow } from "../types/dailyBalanceRow";

export const AccountDailyTable = ({
  records,
  incomeTotal,
  outcomeTotal,
}: {
  records: DailyBalanceRow[];
  incomeTotal: number;
  outcomeTotal: number;
}) => {
  const [modifyModalOpen, setModifyModalOpen] = useState<boolean>(false);
  const [id, setId] = useState<string | null>(null);

  return (
    <>
      <DataTable
        columns={[
          { accessor: "type", title: "タイプ", hidden: true },
          {
            accessor: "date",
            title: "決済日",
            width: "10%",
          },
          { accessor: "genre", title: "ジャンル", width: "20%" },
          { accessor: "category", title: "カテゴリ", width: "10%" },
          {
            accessor: "amount",
            title: "金額",
            width: "10%",
            textAlign: "right",
            render: ({ amount, iocomeType }) => (
              <FormatPrice
                price={amount}
                iocomeType={iocomeType as IocomeType}
              />
            ),
          },
          {
            accessor: "memo",
            title: "メモ",
            width: "50%",
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
        records={records}
        onRowClick={({ id, type }) => {
          if (type === "credit") return;

          setId(id);
          setModifyModalOpen(true);
        }}
      />
      <IocomeTotal income={incomeTotal} outcome={outcomeTotal} />
      {id && (
        <DailyDetailEditModal
          id={id}
          isOpen={modifyModalOpen}
          onCloseHandler={() => setModifyModalOpen(false)}
        />
      )}
    </>
  );
};

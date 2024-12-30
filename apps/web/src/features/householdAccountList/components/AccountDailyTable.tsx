"use client";

import { useState } from "react";

import { FormatPrice } from "../../../components/molecules/FormatPrice";
import { IocomeTotal } from "../../../components/molecules/Total";
import { TagGroup } from "../../../components/ui/tag/TagGroup";
import { DataTable } from "../../../components/ui/v4/table";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { useGetCreditCardSummaryByAccountIdBetweenDate } from "../../../hooks/household/credit_card/useGetCreditCardSummaryByAccountIdBetweenDate";
import { useGetDailyDetailByDateAccountId } from "../../../hooks/household/daily_detail/useGetDailyDetailByDateAccountId";
import { DailyDetailEditModal } from "../../householdModifyDailyDetail/components/DailyDetailEditModal";

export const AccountDailyTable = ({
  fromDate,
  toDate,
  accountId,
}: {
  fromDate: Date;
  toDate: Date;
  accountId: string;
}) => {
  const [modifyModalOpen, setModifyModalOpen] = useState<boolean>(false);
  const [id, setId] = useState<string | null>(null);

  const { data, incomeTotal, outcomeTotal } = useGetDailyDetailByDateAccountId(
    accountId,
    fromDate,
    toDate,
  );

  const {
    data: creditCardSummaryData,
    incomeTotal: creditCardIncomeTotal,
    outcomeTotal: creditCardOutcomeTotal,
  } = useGetCreditCardSummaryByAccountIdBetweenDate(
    accountId,
    fromDate,
    toDate,
  );
  return (
    <>
      <DataTable
        columns={[
          { accessor: "type", title: "タイプ", hidden: true },
          { accessor: "date", title: "決済日", width: "10%" },
          { accessor: "genre", title: "ジャンル", width: "20%" },
          {
            accessor: "iocomeType",
            title: "収支区",
            hidden: true,
          },
          { accessor: "category", title: "カテゴリ", width: "10%" },
          {
            accessor: "amount",
            title: "金額",
            width: "10%",
            textAlign: "right",
            render: ({ amount, iocomeType }) => (
              <FormatPrice
                price={amount as number}
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
        records={(
          data?.dailies.map((d) => ({
            type: "daily",
            id: d.id,
            date: d.date,
            iocomeType: d.genre.iocomeType,
            genre: d.genre.name,
            category: d.category.name,
            amount: d.amount,
            memo: d.memo ?? "",
            tags: d.tags.map((tag) => ({
              id: tag.tag.id,
              label: tag.tag.name,
              colorCode: tag.tag.colorCode,
            })),
          })) ?? []
        )
          .concat(
            creditCardSummaryData?.creditCardSummaries.map((s) => ({
              type: "credit",
              id: s.id,
              date: s.withdrawalDate,
              iocomeType: IocomeType.Outcome,
              genre: "クレジットカード",
              category: s.creditCard,
              amount: s.totalAmount,
              memo: "",
              tags: [],
            })) ?? [],
          )
          .sort((a, b) => {
            if (a.date < b.date) {
              return 1;
            }
            if (a.date > b.date) {
              return -1;
            }
            return 0;
          })}
        onRowClick={({ id, type }) => {
          if (type === "credit") return;

          setId(id);
          setModifyModalOpen(true);
        }}
      />
      <IocomeTotal
        income={(incomeTotal ?? 0) + creditCardIncomeTotal}
        outcome={(outcomeTotal ?? 0) + (creditCardOutcomeTotal ?? 0)}
      />
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

import type { DailyDetail } from "@domain/model/household/DailyDetail";
import { useState } from "react";
import { IocomeTotal } from "@components/molecules/Total";
import { UpdateDetail } from "@components/organisms";
import { DataTable } from "@components/ui/v4/table";
import { useGetCreditCardSummaryByAccountIdBetweenDate } from "@hooks/household/credit_card/useGetCreditCardSummaryByAccountIdBetweenDate";
import { useGetDailyDetailByDateAccountId } from "@hooks/household/daily_detail/useGetDailyDetailByDateAccountId";

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
  const [dailyDetail, setDailyDetail] = useState<DailyDetail | null>(null);

  const { data, incomeTotal, outcomeTotal, getDetail } =
    useGetDailyDetailByDateAccountId(accountId, fromDate, toDate);

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
          { accessor: "date", title: "決済日", width: "10%" },
          { accessor: "genre", title: "ジャンル", width: "20%" },
          { accessor: "category", title: "カテゴリ", width: "10%" },
          {
            accessor: "amount",
            title: "金額",
            width: "10%",
            textAlign: "right",
            render: ({ amount }) => amount.toLocaleString(),
          },
          { accessor: "memo", title: "メモ", width: "50%" },
        ]}
        records={(
          data?.dailies.map((d) => ({
            id: d.id,
            date: d.date,
            genre: d.genre.name,
            category: d.category.name,
            amount: d.amount,
            memo: d.memo ?? "",
          })) ?? []
        )
          .concat(
            creditCardSummaryData?.creditCardSummaries.map((s) => ({
              id: s.id,
              date: s.withdrawalDate,
              genre: "クレジットカード",
              category: s.creditCard,
              amount: s.totalAmount,
              memo: "",
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
        onRowClick={({ id, genre }) => {
          if (genre === "クレジットカード") return;

          setDailyDetail(getDetail(id));
          setModifyModalOpen(true);
        }}
      />
      <IocomeTotal
        income={(incomeTotal ?? 0) + creditCardIncomeTotal}
        outcome={(outcomeTotal ?? 0) + (creditCardOutcomeTotal ?? 0)}
      />
      <UpdateDetail
        initData={dailyDetail}
        isOpen={modifyModalOpen}
        onCloseHandler={() => setModifyModalOpen(false)}
      />
    </>
  );
};

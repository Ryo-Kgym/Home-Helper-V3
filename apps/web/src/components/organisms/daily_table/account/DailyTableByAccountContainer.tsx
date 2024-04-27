/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { tablePropsDateSorter } from "@components/atoms/Table";
import { creditCardSummaryConverter } from "@components/organisms/daily_table/creditCardSummaryConverter";
import { dailyDetailConverter } from "@components/organisms/daily_table/dailyDetailConverter";
import { useGetCreditCardSummaryByAccountIdBetweenDate } from "@hooks/household/credit_card/useGetCreditCardSummaryByAccountIdBetweenDate";
import { useGetDailyDetailByDateAccountId } from "@hooks/household/daily_detail/useGetDailyDetailByDateAccountId";
import { useState } from "react";

import { DailyTableByAccountPresenter } from "./DailyTableByAccountPresenter";

import type { TableProps } from "@components/atoms/Table";
import type { DailyDetail } from "@domain/model/household/DailyDetail";

export const DailyTableByAccountContainer = ({
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

  const tableProps: TableProps[] = dailyDetailConverter({
    data,
    onClickHandler: (id) => {
      setDailyDetail(getDetail(id));
      setModifyModalOpen(true);
    },
  })
    .concat(creditCardSummaryConverter({ data: creditCardSummaryData }))
    .sort(tablePropsDateSorter);

  return (
    <DailyTableByAccountPresenter
      tableProps={tableProps}
      incomeTotal={(incomeTotal ?? 0) + creditCardIncomeTotal}
      outcomeTotal={(outcomeTotal ?? 0) + (creditCardOutcomeTotal ?? 0)}
      modifyModalOpen={modifyModalOpen}
      modifyOnClose={() => setModifyModalOpen(false)}
      detailForUpdate={dailyDetail}
    />
  );
};

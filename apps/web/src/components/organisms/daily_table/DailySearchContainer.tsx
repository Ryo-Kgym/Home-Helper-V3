"use client";

import { useEffect, useState } from "react";
import { DailySearchPresenter } from "./DailySearchPresenter";
import { TableProps, tablePropsDateSorter } from "@components/atoms/Table";
import { dailyDetailConverter } from "@components/organisms/daily_table/dailyDetailConverter";
import { useGetDailyDetailByDate } from "@hooks/household/daily_detail/useGetDailyDetailByDate";
import { DailyDetail } from "@domain/model/household/DailyDetail";
import { creditCardSummaryConverter } from "@components/organisms/daily_table/creditCardSummaryConverter";
import { useGetCreditCardSummaryBetweenDate } from "@hooks/household/credit_card/useGetCreditCardSummaryBetweenDate";
import { useDate } from "@hooks/date/useDate";
import { useDateHolder } from "@hooks/date/useDateHolder";

type DailySearchContainerProps = {
  dailyDetail?: TableProps[];
  defaultFromDate?: Date;
  defaultToDate?: Date;
  defaultIncomeTotal?: number;
  defaultOutcomeTotal?: number;
};
export const DailySearchContainer = ({
  dailyDetail: dailyDetailTableProps,
  defaultFromDate,
  defaultToDate,
  defaultIncomeTotal,
  defaultOutcomeTotal,
}: DailySearchContainerProps) => {
  const { getNow, getThisFirstDate } = useDate();
  const { fromDate: heldFromDate, toDate: heldToDate } = useDateHolder();

  const [fromDate, setFromDate] = useState<Date | null>(
    defaultFromDate ?? getThisFirstDate(),
  );
  const [toDate, setToDate] = useState<Date | null>(defaultToDate ?? getNow());

  const [modifyModalOpen, setModifyModalOpen] = useState<boolean>(false);
  const [dailyDetail, setDailyDetail] = useState<DailyDetail | null>(null);

  const { data, incomeTotal, outcomeTotal, getDetail } =
    useGetDailyDetailByDate(fromDate ?? getNow(), toDate ?? getNow());

  const {
    data: creditCardSummaryData,
    incomeTotal: creditCardIncomeTotal,
    outcomeTotal: creditCardOutcomeTotal,
  } = useGetCreditCardSummaryBetweenDate(fromDate, toDate);

  const tableProps: TableProps[] =
    dailyDetailTableProps ??
    dailyDetailConverter({
      data,
      onClickHandler: (id) => {
        setDailyDetail(getDetail(id));
        setModifyModalOpen(true);
      },
    })
      .concat(
        creditCardSummaryConverter({
          data: creditCardSummaryData,
        }),
      )
      .sort(tablePropsDateSorter);

  const disabled = dailyDetailTableProps?.length != undefined;

  useEffect(() => {
    setFromDate(heldFromDate);
    setToDate(heldToDate);
  }, [heldFromDate, heldToDate]);

  return (
    <DailySearchPresenter
      fromDate={fromDate}
      changeFromDate={setFromDate}
      toDate={toDate}
      changeToDate={setToDate}
      tablePropsList={tableProps}
      incomeTotal={defaultIncomeTotal ?? incomeTotal! + creditCardIncomeTotal}
      outcomeTotal={
        defaultOutcomeTotal ?? outcomeTotal! + creditCardOutcomeTotal!
      }
      disabled={disabled}
      modifyModalOpen={modifyModalOpen}
      modifyOnClose={() => setModifyModalOpen(false)}
      detailForUpdate={dailyDetail}
    />
  );
};

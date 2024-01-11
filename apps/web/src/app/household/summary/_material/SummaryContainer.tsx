/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { MonthlyCategoryContainer } from "@app/household/summary/_material/MonthlyCategoryContainer";
import { SummaryPresenter } from "@app/household/summary/_material/SummaryPresenter";
import { TabProps } from "@components/ui";
import { SummaryCategory } from "@app/household/summary/@summaryCategory/index";
import { useDate } from "@hooks/date/useDate";
import { useFetchSummaryCategoryAmount } from "@hooks/household/summary_category/useFetchSummaryCategoryAmount";
import { useState } from "react";
import { createMonthNames } from "@function/date/create-month-names";

export const SummaryContainer = () => {
  const { offsetDate } = useDate();

  const thisYearFirstDay = offsetDate(new Date(new Date().getFullYear(), 0, 1));
  const thisYearLastDay = offsetDate(
    new Date(new Date().getFullYear(), 11, 31),
  );

  const [fromMonth, setFromMonth] = useState<Date | null>(thisYearFirstDay);
  const [toMonth, setToMonth] = useState<Date | null>(thisYearLastDay);

  const { data, incomeTotal, outcomeTotal } = useFetchSummaryCategoryAmount({
    fromMonth: fromMonth!,
    toMonth: toMonth!,
  });

  const tabProps: TabProps[] = [
    {
      value: "monthlyCategory",
      label: "月次カテゴリ",
      contents: (
        <MonthlyCategoryContainer
          data={data}
          incomeTotal={incomeTotal}
          outcomeTotal={outcomeTotal}
          monthNames={createMonthNames(fromMonth!, toMonth!)}
        />
      ),
    },
    {
      value: "setting",
      label: "設定",
      contents: <SummaryCategory />,
    },
  ];

  return (
    <SummaryPresenter
      fromMonth={fromMonth}
      setFromMonth={setFromMonth}
      toMonth={toMonth}
      setToMonth={setToMonth}
      defaultSelect="monthlyCategory"
      tabPropsList={tabProps}
    />
  );
};

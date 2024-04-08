/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { DailySearchContainer } from "@components/organisms/daily_table/DailySearchContainer";

import type { TableProps } from "@components/atoms/Table";

export const DailyTableByCategoryPresenter = ({
  firstDay,
  lastDay,
  tableProps,
  incomeTotal,
  outcomeTotal,
}: {
  firstDay: Date;
  lastDay: Date;
  tableProps: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
}) => {
  return (
    <DailySearchContainer
      dailyDetail={tableProps}
      defaultFromDate={firstDay}
      defaultToDate={lastDay}
      defaultIncomeTotal={incomeTotal}
      defaultOutcomeTotal={outcomeTotal}
    />
  );
};

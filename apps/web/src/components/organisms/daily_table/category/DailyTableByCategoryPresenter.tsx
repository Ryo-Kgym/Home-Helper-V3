/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { TableProps } from "@components/atoms/Table";
import { DailySearchContainer } from "@components/organisms/daily_table/DailySearchContainer";

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

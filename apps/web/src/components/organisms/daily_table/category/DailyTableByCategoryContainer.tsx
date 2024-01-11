/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { TableProps } from "@components/atoms/Table";
import { DailyTableByCategoryPresenter } from "./DailyTableByCategoryPresenter";
import { dailyDetailConverter } from "@components/organisms/daily_table/dailyDetailConverter";
import { useGetDailyDetailByDateCategoryId } from "@hooks/household/daily_detail/useGetDailyDetailByDateCategoryId";

export const DailyTableByCategoryContainer = ({
  fromMonth,
  toMonth,
  categoryId,
}: {
  fromMonth: Date;
  toMonth: Date;
  categoryId: string;
}) => {
  const firstDay = new Date(fromMonth.getFullYear(), fromMonth.getMonth(), 1);
  const lastDay = new Date(toMonth.getFullYear(), toMonth.getMonth() + 1, 0);

  const { data, incomeTotal, outcomeTotal } = useGetDailyDetailByDateCategoryId(
    categoryId,
    firstDay,
    lastDay,
  );

  const tableProps: TableProps[] = dailyDetailConverter({ data });

  return (
    <DailyTableByCategoryPresenter
      firstDay={firstDay}
      lastDay={lastDay}
      tableProps={tableProps}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
  );
};

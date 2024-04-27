/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useGetTotalForMonth } from "@hooks/household/iocome/useGetTotalForMonth";
import { useState } from "react";

import { CalendarPresenter } from "./CalendarPresenter";

export const CalendarContainer = () => {
  const [baseDate, setBaseDate] = useState<Date | null>(new Date());

  const { dailyTotalList, refetch } = useGetTotalForMonth(baseDate!);

  return (
    <CalendarPresenter
      baseDate={baseDate}
      setBaseDate={setBaseDate}
      dailyTotalList={dailyTotalList}
      refetch={refetch}
    />
  );
};

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { DepositPresenter } from "./DepositPresenter";
import { useGetMonthlyDeposit } from "@hooks/household/deposit/useGetMonthlyDeposit";
import { createMonthNames } from "@function/date/create-month-names";
import { TableProps } from "@components/atoms/Table";
import { useState } from "react";

export const DepositContainer = () => {
  const thisYear = new Date().getFullYear();

  const [fromMonth, setFromMonth] = useState<Date | null>(
    new Date(thisYear, 0, 1),
  );
  const [toMonth, setToMonth] = useState<Date | null>(
    new Date(thisYear, 11, 31),
  );

  const { monthlyDeposits, loading, error } = useGetMonthlyDeposit({
    fromDate: fromMonth!,
    toDate: toMonth!,
  });

  let tablePropsList: TableProps[] = [];

  if (loading) return <div>loading...</div>;

  const header: string[] = [
    "カテゴリ",
    ...createMonthNames(fromMonth!, toMonth!),
  ];

  tablePropsList = monthlyDeposits.map((md) => ({
    keyPrefix: md.categoryId,
    columns: [
      { value: md.categoryName, align: "left" },
      ...md.monthlyCategory.map((mc) => ({
        value: mc.amount.toLocaleString(),
        align: "right",
      })),
    ],
  })) as TableProps[];

  return (
    <DepositPresenter
      fromMonth={fromMonth}
      changeFromMonth={setFromMonth}
      toMonth={toMonth}
      changeToMonth={setToMonth}
      header={header}
      tablePropsList={tablePropsList}
    />
  );
};

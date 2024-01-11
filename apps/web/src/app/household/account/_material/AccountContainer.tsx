/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import type { TableProps } from "@components/ui";
import { useState } from "react";
import { ResponsiveSwitcher } from "@app/household/_layout/ResponsiveSwitcher";
import { DailyTableByAccount } from "@components/organisms/daily_table/account";
import { useGetAccountBalanceList } from "@hooks/household/account/useGetAccountBalanceList";

import { AccountPresenter } from "./AccountPresenter";

const FIRST_DATE = new Date("2019-01-01");

export const AccountContainer = () => {
  const [fromDate, setFromDate] = useState<Date | null>(FIRST_DATE);
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");

  const { data, total } = useGetAccountBalanceList(fromDate, toDate!);

  const tableProps: TableProps[] =
    data?.account?.map((account) => {
      return {
        keyPrefix: "account",
        columns: [
          { value: account?.accountName, align: "left" },
          {
            value: Number(
              account?.allDetailViewsAggregate.aggregate?.sum?.signedAmount,
            ).toLocaleString(),
            align: "right",
          },
        ],
        onClick: () => {
          setSelectedAccountId(account?.id);
        },
      };
    }) ?? [];

  return (
    <ResponsiveSwitcher
      first={
        <AccountPresenter
          fromDate={fromDate}
          changeFromDate={setFromDate}
          toDate={toDate}
          changeToDate={setToDate}
          tableProps={tableProps}
          total={total}
        />
      }
      second={
        <DailyTableByAccount
          fromDate={fromDate ?? FIRST_DATE}
          toDate={toDate!}
          accountId={selectedAccountId}
        />
      }
    />
  );
};

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useState } from "react";
import { ResponsiveSwitcher } from "@app/household/_layout/ResponsiveSwitcher";
import { DailyTableByAccount } from "@components/organisms/daily_table/account";
import { AccountTableRow } from "@features/household/accountList/components/type";
import { useGetAccountBalanceList } from "@hooks/household/account/useGetAccountBalanceList";

import { AccountPresenter } from "./AccountPresenter";

const FIRST_DATE = new Date("2019-01-01");

export const AccountContainer = () => {
  const [fromDate, setFromDate] = useState<Date | null>(FIRST_DATE);
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");

  const { data, total } = useGetAccountBalanceList(fromDate, toDate!);

  const records: AccountTableRow[] =
    data?.account.map((a) => ({
      id: a.id,
      accountName: a.accountName,
      balance: a.allDetailViewsAggregate.aggregate?.sum?.signedAmount,
    })) ?? [];

  return (
    <ResponsiveSwitcher
      first={
        <AccountPresenter
          fromDate={fromDate}
          changeFromDate={setFromDate}
          toDate={toDate}
          changeToDate={setToDate}
          total={total}
          records={records}
          onRowClick={(record) => setSelectedAccountId(record.id.toString())}
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

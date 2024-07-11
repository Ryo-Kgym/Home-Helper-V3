"use client";

import { ResponsiveSwitcher } from "@app/household/_layout/ResponsiveSwitcher";
import { DailyTableByAccount } from "@components/organisms/daily_table/account";
import { BalanceListTable } from "@features/household/accountList/components/BalanceListTable";
import { AccountBalance } from "@oneforall/domain/household/accountBalance";

export const AccountListClient = ({
  balanceRecords,
  total,
  fromDate,
  toDate,
  accountId,
}: {
  balanceRecords: AccountBalance[];
  total: number | undefined;
  fromDate: Date;
  toDate: Date;
  accountId: string | undefined;
}) => {
  return (
    <ResponsiveSwitcher
      first={
        <BalanceListTable
          balanceRecords={balanceRecords}
          total={total}
          fromDate={fromDate}
          toDate={toDate}
        />
      }
      second={
        <DailyTableByAccount
          fromDate={fromDate}
          toDate={toDate}
          accountId={accountId ?? ""}
        />
      }
    />
  );
};

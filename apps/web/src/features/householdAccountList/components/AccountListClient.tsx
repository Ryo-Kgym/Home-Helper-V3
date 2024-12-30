"use client";

import { AccountBalance } from "@oneforall/domain/household/accountBalance";

import { BalanceListTable } from "./BalanceListTable";

export const AccountListClient = ({
  balanceRecords,
  total,
  fromDate,
  toDate,
}: {
  balanceRecords: AccountBalance[];
  total: number | undefined;
  fromDate: Date;
  toDate: Date;
}) => {
  return (
    <BalanceListTable
      balanceRecords={balanceRecords}
      total={total}
      fromDate={fromDate}
      toDate={toDate}
    />
  );
};

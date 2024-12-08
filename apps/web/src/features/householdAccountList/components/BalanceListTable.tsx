"use client";

import { AccountBalance } from "@oneforall/domain/household/accountBalance";

import { Total } from "~/components/molecules/Total";
import { RangeDatePicker } from "~/components/ui/date";
import { DataTable } from "~/components/ui/v4/table";
import { useNavigation } from "~/routing/client/useNavigation";

export const BalanceListTable = ({
  balanceRecords,
  total = 0,
  fromDate,
  toDate,
}: {
  balanceRecords: AccountBalance[];
  total: number | undefined;
  fromDate: Date;
  toDate: Date;
}) => {
  const { prependParamAndPush } = useNavigation();

  return (
    <>
      <RangeDatePicker
        fromDate={fromDate}
        changeFromDate={(d) => {
          prependParamAndPush({ fromDate: d.toISOString().slice(0, 10) });
        }}
        toDate={toDate}
        changeToDate={(d) => {
          prependParamAndPush({ toDate: d.toISOString().slice(0, 10) });
        }}
      />
      <DataTable
        columns={[
          { accessor: "accountName", title: "アカウント", width: "50%" },
          {
            accessor: "balance",
            title: "残高",
            width: "50%",
            textAlign: "right",
            render: ({ balance }) => balance?.toLocaleString() ?? 0,
          },
        ]}
        records={balanceRecords}
        onRowClick={(record) => {
          prependParamAndPush({ accountId: record.id });
        }}
      />
      <Total total={total} />
    </>
  );
};

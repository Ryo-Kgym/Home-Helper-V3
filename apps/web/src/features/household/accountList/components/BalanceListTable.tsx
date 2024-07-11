"use client";

import { Total } from "@components/molecules/Total";
import { RangeDatePicker } from "@components/ui/date";
import { DataTable } from "@components/ui/v4/table";
import { AccountBalance } from "@oneforall/domain/household/accountBalance";
import { useNavigation } from "@routing/client/useNavigation";

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
          prependParamAndPush({ key: "fromDate", value: d.toISOString() });
        }}
        toDate={toDate}
        changeToDate={(d) => {
          prependParamAndPush({ key: "toDate", value: d.toISOString() });
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
            render: ({ balance }) => balance.toLocaleString(),
          },
        ]}
        records={balanceRecords}
        onRowClick={(record) => {
          prependParamAndPush({ key: "accountId", value: record.id });
        }}
      />
      <Total total={total} />
    </>
  );
};

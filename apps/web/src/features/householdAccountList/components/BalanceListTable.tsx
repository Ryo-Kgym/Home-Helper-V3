"use client";

import { AccountBalance } from "@oneforall/domain/household/accountBalance";

import { Total } from "../../../components/molecules/Total";
import { DateInput } from "../../../components/ui/v4/dateInput/DateInput";
import { DataTable } from "../../../components/ui/v4/table";
import { convertToYmd } from "../../../function/date/convertToYmd";
import { useNavigation } from "../../../routing/client/useNavigation";

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
      <DateInput
        label={"From"}
        value={fromDate}
        setValue={(d) => {
          if (!d) return;
          prependParamAndPush({ fromDate: convertToYmd(d) });
        }}
      />
      <DateInput
        label={"To"}
        value={toDate}
        setValue={(d) => {
          if (!d) return;
          prependParamAndPush({ toDate: convertToYmd(d) });
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

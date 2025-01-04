import { AccountDetailTable } from "./AccountDetailTable";

export const AccountDetailTableServer = async ({
  fromDate = new Date("2019-01-01"),
  toDate = new Date(),
  accountId,
}: {
  fromDate: Date | undefined;
  toDate: Date | undefined;
  accountId: string | undefined;
}) => {
  return (
    <AccountDetailTable
      fromDate={fromDate}
      toDate={toDate}
      accountId={accountId ?? ""}
    />
  );
};

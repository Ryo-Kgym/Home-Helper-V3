import { AccountDailyTable } from "../../../../features/householdAccountList/components/AccountDailyTable";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    fromDate: string | undefined;
    toDate: string | undefined;
    accountId: string | undefined;
  }>;
}) => {
  const { fromDate, toDate, accountId } = await searchParams;

  return (
    <AccountDailyTable
      fromDate={fromDate ? new Date(fromDate) : new Date("2019-01-01")}
      toDate={toDate ? new Date(toDate) : new Date()}
      accountId={accountId ?? ""}
    />
  );
};

export default Page;

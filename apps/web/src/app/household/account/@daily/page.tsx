import { AccountDailyServer } from "../../../../features/householdAccountList/components/AccountDailyServer";

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
    <AccountDailyServer
      fromDate={fromDate ? new Date(fromDate) : undefined}
      toDate={toDate ? new Date(toDate) : undefined}
      accountId={accountId}
    />
  );
};

export default Page;

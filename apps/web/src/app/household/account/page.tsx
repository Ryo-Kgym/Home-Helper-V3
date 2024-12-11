import { AccountListServer } from "../../../features/householdAccountList/components/AccountListServer";

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
    <AccountListServer
      fromDate={fromDate ? new Date(fromDate) : undefined}
      toDate={toDate ? new Date(toDate) : undefined}
      accountId={accountId}
    />
  );
};

export default Page;

import { BalanceListTableServer } from "../../../../features/householdAccountList/components/BalanceListTableServer";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    fromDate: string | undefined;
    toDate: string | undefined;
    accountId: string | undefined;
  }>;
}) => {
  const { fromDate, toDate } = await searchParams;

  return (
    <BalanceListTableServer
      fromDate={fromDate ? new Date(fromDate) : undefined}
      toDate={toDate ? new Date(toDate) : undefined}
    />
  );
};

export default Page;

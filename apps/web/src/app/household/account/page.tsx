import { AccountListServer } from "features/householdAccountList/components/AccountListServer";

const Page = ({
  searchParams,
}: {
  searchParams: {
    fromDate: string | undefined;
    toDate: string | undefined;
    accountId: string | undefined;
  };
}) => (
  <AccountListServer
    fromDate={
      searchParams.fromDate ? new Date(searchParams.fromDate) : undefined
    }
    toDate={searchParams.toDate ? new Date(searchParams.toDate) : undefined}
    accountId={searchParams.accountId}
  />
);

export default Page;

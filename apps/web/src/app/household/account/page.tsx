import { AccountListPage } from "@pageComponents/householdAccount";

const Page = ({
  searchParams,
}: {
  searchParams: {
    fromDate: string | undefined;
    toDate: string | undefined;
    accountId: string | undefined;
  };
}) => (
  <AccountListPage
    fromDate={
      searchParams.fromDate ? new Date(searchParams.fromDate) : undefined
    }
    toDate={searchParams.toDate ? new Date(searchParams.toDate) : undefined}
    accountId={searchParams.accountId}
  />
);

export default Page;

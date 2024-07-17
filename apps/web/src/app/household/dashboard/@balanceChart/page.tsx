import { BalanceChartPage } from "pageComponents/householdBalanceChart";

const Page = ({
  searchParams,
}: {
  searchParams: {
    fromDate: string | undefined;
    toDate: string | undefined;
  };
}) => {
  return (
    <BalanceChartPage
      fromDate={
        searchParams.fromDate ? new Date(searchParams.fromDate) : undefined
      }
      toDate={searchParams.toDate ? new Date(searchParams.toDate) : undefined}
    />
  );
};

export default Page;

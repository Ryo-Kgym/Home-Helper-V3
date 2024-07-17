import { ChartDetailPage } from "pageComponents/householdChartDetailTable";

const Page = ({
  searchParams,
}: {
  searchParams: {
    watch: string; // yyyy-mm
  };
}) => {
  return (
    <ChartDetailPage
      watchFirstDate={
        searchParams.watch ? new Date(`${searchParams.watch}-01`) : null
      }
    />
  );
};

export default Page;

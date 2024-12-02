import { ChartDetailTableServer } from "features/householdChartDetailTable/components/ChartDetailTableServer";

const Page = ({
  searchParams,
}: {
  searchParams: {
    watch: string | undefined; // yyyy-mm
    dateType: string | undefined;
  };
}) => {
  return (
    <ChartDetailTableServer
      watchFirstDate={
        searchParams.watch ? new Date(`${searchParams.watch}-01`) : null
      }
      dateType={(() => {
        switch (searchParams.dateType) {
          case "withdrawalDate":
            return "withdrawalDate";
          case "settlementDate":
            return "settlementDate";
          default:
            return "withdrawalDate";
        }
      })()}
    />
  );
};

export default Page;

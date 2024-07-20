import { CategoryChartServer } from "@features/householdCategoryChart/components/CategoryChartServer";
import { BalanceChartPage } from "pageComponents/householdBalanceChart";

const Page = ({
  searchParams,
}: {
  searchParams: {
    fromDate: string | undefined;
    toDate: string | undefined;
    type: string | undefined;
  };
}) => {
  switch (searchParams.type) {
    case "category": {
      return (
        <CategoryChartServer
          fromDate={
            searchParams.fromDate ? new Date(searchParams.fromDate) : undefined
          }
          toDate={
            searchParams.toDate ? new Date(searchParams.toDate) : undefined
          }
        />
      );
    }
    default: {
      return (
        <BalanceChartPage
          fromDate={
            searchParams.fromDate ? new Date(searchParams.fromDate) : undefined
          }
          toDate={
            searchParams.toDate ? new Date(searchParams.toDate) : undefined
          }
        />
      );
    }
  }
};

export default Page;

import { BalanceChartPageServer } from "features/householdBalanceChart/components/BalanceChartPageServer";
import { CategoryChartServer } from "features/householdCategoryChart/components/CategoryChartServer";

const Page = ({
  searchParams,
}: {
  searchParams: {
    fromDate: string | undefined;
    toDate: string | undefined;
    type: string | undefined;
  };
}) => {
  const convertToDate = (date: string | undefined) => {
    const d = date ? new Date(date) : undefined;

    if (isNaN(d?.getTime() ?? 0)) {
      return undefined;
    }
    return d;
  };

  switch (searchParams.type) {
    case "category": {
      return (
        <CategoryChartServer
          fromDate={convertToDate(searchParams.fromDate)}
          toDate={convertToDate(searchParams.toDate)}
        />
      );
    }
    default: {
      return (
        <BalanceChartPageServer
          fromDate={convertToDate(searchParams.fromDate)}
          toDate={convertToDate(searchParams.toDate)}
        />
      );
    }
  }
};

export default Page;

import { BalanceChartPageServer } from "../../../../../features/householdBalanceChart/components/BalanceChartPageServer";
import { CategoryChartServer } from "../../../../../features/householdCategoryChart/components/CategoryChartServer";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    fromDate: string | undefined;
    toDate: string | undefined;
    type: string | undefined;
  }>;
}) => {
  const { type, fromDate, toDate } = await searchParams;

  const convertToDate = (date: string | undefined) => {
    const d = date ? new Date(date) : undefined;

    if (isNaN(d?.getTime() ?? 0)) {
      return undefined;
    }
    return d;
  };

  switch (type) {
    case "category": {
      return (
        <CategoryChartServer
          fromDate={convertToDate(fromDate)}
          toDate={convertToDate(toDate)}
        />
      );
    }
    default: {
      return (
        <BalanceChartPageServer
          fromDate={convertToDate(fromDate)}
          toDate={convertToDate(toDate)}
        />
      );
    }
  }
};

export default Page;

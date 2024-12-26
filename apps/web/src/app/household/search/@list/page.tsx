import { SearchListServer } from "../../../../features/householdSearch/components/SearchListServer";
import { YYYY_MM_DD } from "../../../../types/yyyyMMdd";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    fromDate: YYYY_MM_DD | undefined;
    toDate: YYYY_MM_DD | undefined;
  }>;
}) => {
  const { fromDate, toDate } = await searchParams;
  const getThisYearFirstDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-01-01` as YYYY_MM_DD;
  };
  const getThisYearLastDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-12-31` as YYYY_MM_DD;
  };
  return (
    <SearchListServer
      fromDate={fromDate ?? getThisYearFirstDate()}
      toDate={toDate ?? getThisYearLastDate()}
    />
  );
};

export default Page;

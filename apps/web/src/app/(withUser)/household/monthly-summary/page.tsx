import { convertToYmd } from "@/core/function/date/convertToYmd";
import { YYYY_MM_DD } from "@/type/date/date";

import { MonthlySummaryServer } from "../../../../features/householdMonthlySummary/components/MonthlySummaryServer";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    from: YYYY_MM_DD | undefined;
    to: YYYY_MM_DD | undefined;
  }>;
}) => {
  const { from, to } = await searchParams;

  const thisMonthFirstDate = (() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  })();

  const nextYearDate = (() => {
    const today = new Date();
    return new Date(today.getFullYear() + 1, today.getMonth(), 0);
  })();

  return (
    <MonthlySummaryServer
      fromDate={from ?? convertToYmd(thisMonthFirstDate)}
      toDate={to ?? convertToYmd(nextYearDate)}
    />
  );
};

export default Page;

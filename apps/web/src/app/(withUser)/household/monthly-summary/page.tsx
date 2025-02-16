import { type YYYY_MM_DD, YYYYmmDD } from "@/type/date/date";

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

  const convertToDate = (date: YYYY_MM_DD | undefined) => {
    return date ? new YYYYmmDD(date) : undefined;
  };

  return (
    <MonthlySummaryServer
      fromDate={convertToDate(from)}
      toDate={convertToDate(to)}
    />
  );
};

export default Page;

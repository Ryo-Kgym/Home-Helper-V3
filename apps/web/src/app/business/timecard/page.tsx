import { redirect } from "next/navigation";

import { BusinessTimeCardServer } from "../../../features/businessTimeCard/components/BusinessTimeCardServer";
import { paths } from "../../../routing/paths";
import { YYYY_MM_DD } from "../../../types/yyyyMMdd";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ date: YYYY_MM_DD }>;
}) => {
  const { date } = await searchParams;

  if (!date) {
    redirect(paths.business.timecard());
  }

  return <BusinessTimeCardServer baseDate={date} />;
};

export default Page;

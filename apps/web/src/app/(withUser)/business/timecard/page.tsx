import { BusinessTimeCardServer } from "../../../../features/businessTimeCard/components/BusinessTimeCardServer";
import { convertToYmd } from "../../../../function/date/convertToYmd";

const Page = async () => {
  return <BusinessTimeCardServer baseDate={convertToYmd(new Date())} />;
};

export default Page;

export const dynamic = "force-dynamic";

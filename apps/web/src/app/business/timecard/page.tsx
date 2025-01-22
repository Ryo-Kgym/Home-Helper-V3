import { BusinessTimeCardServer } from "../../../features/businessTimeCard/components/BusinessTimeCardServer";

const Page = () => {
  const baseDate = "2021-08-01";

  return <BusinessTimeCardServer baseDate={baseDate} />;
};

export default Page;

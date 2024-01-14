import { useLocalSearchParams } from "expo-router";

import { Calendar } from "~/components/page/household";

const Page = () => {
  const { date } = useLocalSearchParams();
  return <Calendar baseDate={new Date(date as string)} />;
};

export default Page;

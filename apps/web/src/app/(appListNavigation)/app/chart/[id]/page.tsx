import { ShowChart } from "../../../../../pageComponents/showChart";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <ShowChart appId={id} />
);

export default Page;

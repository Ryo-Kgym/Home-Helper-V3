import { ShowApp } from "@feature/app/show";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <ShowApp appId={id} />
);

export default Page;

import { ModifyApp } from "@feature/app/modify";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <ModifyApp appId={id} />
);

export default Page;

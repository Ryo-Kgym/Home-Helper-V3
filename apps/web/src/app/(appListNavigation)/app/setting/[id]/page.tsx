import { ModifyApp } from "@pageComponents/appModify";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <ModifyApp appId={id} />
);
export default Page;

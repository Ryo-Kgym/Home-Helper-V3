import { EditApp } from "@feature/app/edit";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <EditApp appId={id} />
);

export default Page;

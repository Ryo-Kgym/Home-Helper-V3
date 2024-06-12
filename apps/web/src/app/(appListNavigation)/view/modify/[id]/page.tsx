import { ModifyView } from "@features/viewAppModify";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <ModifyView viewId={id} />
);

export default Page;

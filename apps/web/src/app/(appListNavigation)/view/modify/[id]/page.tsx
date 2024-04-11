import { ModifyViewServer } from "@feature/view/modify/ModifyViewServer";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <ModifyViewServer viewId={id} />
);

export default Page;

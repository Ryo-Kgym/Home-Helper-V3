import { RecordList } from "@feature/record/list";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <RecordList appId={id} />
);

export default Page;

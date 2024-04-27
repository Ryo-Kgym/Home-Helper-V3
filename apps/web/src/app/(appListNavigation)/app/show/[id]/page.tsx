import { RecordList } from "feature/app/recordList";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <RecordList appId={id} />
);

export default Page;

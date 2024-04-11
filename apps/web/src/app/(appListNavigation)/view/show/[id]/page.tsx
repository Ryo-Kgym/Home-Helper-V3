import { RecordList } from "feature/view/recordList";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <RecordList viewId={id} />
);

export default Page;

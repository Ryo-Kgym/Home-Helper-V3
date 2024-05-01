import { RecordList } from "pageComponents/appRecordList";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <RecordList appId={id} />
);

export default Page;

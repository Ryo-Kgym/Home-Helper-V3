import { ViewRecordList } from "@pageComponents/viewRecordList";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <ViewRecordList viewId={id} />
);

export default Page;

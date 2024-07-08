import { RecordDetailPage } from "pageComponents/recordDetail";

const Page = ({ params }: { params: { recordId: string } }) => {
  return <RecordDetailPage recordId={params.recordId} />;
};

export default Page;

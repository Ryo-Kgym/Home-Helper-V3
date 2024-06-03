import { CreateSummaryView } from "@pageComponents/summaryViewCreate";

const Page = ({ params: { viewId } }: { params: { viewId: string } }) => (
  <CreateSummaryView viewId={viewId} />
);

export default Page;

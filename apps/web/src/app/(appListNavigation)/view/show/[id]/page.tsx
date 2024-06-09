import { ViewRecordList } from "@pageComponents/viewRecordList";

const Page = ({
  params: { id },
  searchParams: { filter, recordId },
}: {
  params: { id: string };
  searchParams: { filter: string | undefined; recordId: string | undefined };
}) => <ViewRecordList viewId={id} filterStr={filter} recordId={recordId} />;

export default Page;

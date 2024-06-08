import { ViewRecordList } from "@pageComponents/viewRecordList";

const Page = ({
  params: { id },
  searchParams: { filter },
}: {
  params: { id: string };
  searchParams: { filter: string | undefined };
}) => <ViewRecordList viewId={id} filterStr={filter} />;

export default Page;

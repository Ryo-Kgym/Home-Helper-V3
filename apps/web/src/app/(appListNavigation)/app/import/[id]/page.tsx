import { RecordImport } from "pages/appRecordImport";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <RecordImport appId={id} />
);

export default Page;

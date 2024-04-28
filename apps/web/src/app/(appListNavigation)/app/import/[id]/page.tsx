import { RecordImport } from "pages/app/recordImport";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <RecordImport appId={id} />
);

export default Page;

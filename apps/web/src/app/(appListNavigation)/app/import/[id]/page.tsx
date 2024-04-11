import { RecordImport } from "feature/app/recordImport";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <RecordImport appId={id} />
);

export default Page;

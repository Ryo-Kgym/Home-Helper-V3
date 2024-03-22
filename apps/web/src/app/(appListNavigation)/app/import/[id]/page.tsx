import { RecordImport } from "@feature/record/import";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <RecordImport appId={id} />
);

export default Page;

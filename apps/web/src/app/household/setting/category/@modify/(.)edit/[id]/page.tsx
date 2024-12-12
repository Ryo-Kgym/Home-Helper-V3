import { CategoryEdit } from "../../../../../../../components/page/CategoryEdit";
import { BackModal } from "../../../../../../../components/ui";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <BackModal>
      <CategoryEdit categoryId={id} />
    </BackModal>
  );
};

export default Page;

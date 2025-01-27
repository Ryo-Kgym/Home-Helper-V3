import { BackModal } from "../../../../../../../../components/ui";
import { CategoryEdit } from "../../../../../../../../features/householdCategoryEdit/components/CategoryEdit";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <BackModal>
      <CategoryEdit categoryId={id} />
    </BackModal>
  );
};

export default Page;

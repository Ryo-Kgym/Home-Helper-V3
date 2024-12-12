import { GenreEdit } from "../../../../../../../components/page/GenreEdit";
import { BackModal } from "../../../../../../../components/ui";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <BackModal>
      <GenreEdit genreId={id} />
    </BackModal>
  );
};

export default Page;

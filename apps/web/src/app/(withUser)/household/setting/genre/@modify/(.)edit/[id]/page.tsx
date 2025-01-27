import { BackModal } from "../../../../../../../../components/ui";
import { GenreEditContainer } from "../../../../../../../../features/householdGenreEdit/components/GenreEditContainer";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <BackModal>
      <GenreEditContainer genreId={id} />
    </BackModal>
  );
};

export default Page;

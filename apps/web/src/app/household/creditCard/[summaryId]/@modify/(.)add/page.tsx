import { CreditCardDetailAdd } from "../../../../../../components/page/CreditCardDetailAdd";
import { BackModal } from "../../../../../../components/ui";

const Page = async ({ params }: { params: Promise<{ summaryId: string }> }) => {
  const { summaryId } = await params;

  return (
    <BackModal>
      <CreditCardDetailAdd summaryId={summaryId} />
    </BackModal>
  );
};

export default Page;

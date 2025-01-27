import { CreditDetailListServer } from "../../../../../features/householdCreditDetailList/components/CreditDetailListServer";

const Page = async ({ params }: { params: Promise<{ summaryId: string }> }) => {
  const { summaryId } = await params;
  return <CreditDetailListServer creditCardSummaryId={summaryId} />;
};

export default Page;

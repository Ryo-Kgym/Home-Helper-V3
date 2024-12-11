import { CreditDetailListServer } from "../../../../features/householdCreditDetailList/components/CreditDetailListServer";

const Page = ({ params: { summaryId } }: { params: { summaryId: string } }) => (
  <CreditDetailListServer creditCardSummaryId={summaryId} />
);

export default Page;

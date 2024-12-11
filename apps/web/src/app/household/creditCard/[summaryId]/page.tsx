import { CreditDetailListContainer } from "../../../../features/householdCreditDetailList/components/CreditDetailListContainer";

const Page = ({ params: { summaryId } }: { params: { summaryId: string } }) => (
  <CreditDetailListContainer creditCardSummaryId={summaryId} />
);

export default Page;

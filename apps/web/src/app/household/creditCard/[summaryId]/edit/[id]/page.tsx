import { BackModal } from "../../../../../../components/ui";
import { CreditCardDetailEditContainer } from "../../../../../../features/householdCreditDetailEdit/components/CreditCardDetailEditContainer";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <BackModal>
    <CreditCardDetailEditContainer id={id} />
  </BackModal>
);

export default Page;

/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { CreditCardDetailAdd } from "@components/page/CreditCardDetailAdd";
import { BackModal } from "@components/ui";

const Page = ({ params: { summaryId } }: { params: { summaryId: string } }) => (
  <BackModal>
    <CreditCardDetailAdd summaryId={summaryId} />
  </BackModal>
);

export default Page;

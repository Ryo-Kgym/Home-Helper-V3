/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { CreditCardDetailList } from "components/page/CreditCardDetailList";

const Page = ({ params: { summaryId } }: { params: { summaryId: string } }) => (
  <CreditCardDetailList creditCardSummaryId={summaryId} />
);

export default Page;

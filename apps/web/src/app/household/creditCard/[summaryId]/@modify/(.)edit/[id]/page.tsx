/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { CreditCardDetailEdit } from "@components/page/CreditCardDetailEdit";
import { BackModal } from "@components/ui";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <BackModal>
    <CreditCardDetailEdit id={id} />
  </BackModal>
);

export default Page;

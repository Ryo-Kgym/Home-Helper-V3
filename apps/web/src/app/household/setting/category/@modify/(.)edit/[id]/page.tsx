/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { BackModal } from "@components/ui";
import { CategoryEdit } from "@components/page/CategoryEdit";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <BackModal>
    <CategoryEdit categoryId={id} />
  </BackModal>
);

export default Page;

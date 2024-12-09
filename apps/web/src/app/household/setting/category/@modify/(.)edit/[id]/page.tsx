/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { CategoryEdit } from "../../../../../../../components/page/CategoryEdit";
import { BackModal } from "../../../../../../../components/ui";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <BackModal>
    <CategoryEdit categoryId={id} />
  </BackModal>
);

export default Page;

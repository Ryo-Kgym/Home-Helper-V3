/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { BackModal } from "@components/ui";
import { GenreEdit } from "@components/page/GenreEdit";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <BackModal>
    <GenreEdit genreId={id} />
  </BackModal>
);

export default Page;

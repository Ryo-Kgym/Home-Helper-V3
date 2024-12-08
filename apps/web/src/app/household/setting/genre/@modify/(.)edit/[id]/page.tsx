/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { GenreEdit } from "~/components/page/GenreEdit";
import { BackModal } from "~/components/ui";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <BackModal>
    <GenreEdit genreId={id} />
  </BackModal>
);

export default Page;

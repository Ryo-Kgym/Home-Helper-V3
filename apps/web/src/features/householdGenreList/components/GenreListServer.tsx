import { GetAllGenreDocument } from "@v3/graphql/household/schema/query/get/GetAllGenre.generated";

import { GenreType } from "../../../domain/model/household/GenreType";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { GenreListContainer } from "./GenreListContainer";

export const GenreListServer = async () => {
  const { group } = await findUser();
  const { data } = await execQuery(GetAllGenreDocument, { groupId: group.id });

  const genreList = data.genre.map((genre) => ({
    id: genre.id,
    genreName: genre.genreName,
    genreType: genre.genreType as GenreType,
    iocomeType: genre.iocomeType as IocomeType,
    displayOrder: genre.displayOrder,
    validFlag: genre.validFlag ?? true,
  }));

  return <GenreListContainer genreList={genreList} />;
};

"use server";

import { GetValidGenreListByIocomeTypeDocument } from "@v3/graphql/household/type";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";

export const fetchGenreList = async ({
  iocomeType,
}: {
  iocomeType: IocomeType;
}) => {
  const { group } = await findUser();
  const { data } = await execQuery(GetValidGenreListByIocomeTypeDocument, {
    iocomeType,
    groupId: group.id,
  });
  const genres =
    data?.allGenresList?.map((genre) => ({
      label: genre.genreName,
      value: genre.genreId,
      description: genre.categoriesByGenreIdList
        .map((c) => c.categoryName)
        .join(", "),
    })) ?? [];

  return { genres };
};

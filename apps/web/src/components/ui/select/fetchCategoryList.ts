"use server";

import { GetValidCategoryByGenreIdDocument } from "@v3/graphql/household/schema/query/v5/getValidCategoryByGenreId.generated";

import type { SelectData } from "./v5";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";

export const fetchCategoryList = async ({ genreId }: { genreId: string }) => {
  const { group } = await findUser();
  const { data } = await execQuery(GetValidCategoryByGenreIdDocument, {
    genreId,
    groupId: group.id,
  });
  const categories =
    data?.genreById?.map(
      (genre) =>
        ({
          group: genre.name ?? "",
          items:
            genre.categories.map((category) => ({
              label: category.name ?? "",
              value: category.id ?? "",
            })) ?? [],
        }) as SelectData,
    ) ?? [];

  return { categories };
};

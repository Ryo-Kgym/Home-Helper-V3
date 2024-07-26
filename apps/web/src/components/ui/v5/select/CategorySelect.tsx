"use client";

import type { SelectData } from "@components/ui";
import { Select } from "@components/ui";
import { useGroup } from "@hooks/group/useGroup";
import { useGetValidCategoryByGenreIdQuery } from "@v3/graphql/household";

export const CategorySelect = ({
  categoryId,
  setCategoryId,
  genreId,
}: {
  categoryId: string | null;
  setCategoryId: (_: string | null) => void;
  genreId: string | null;
}) => {
  const { groupId } = useGroup();

  const [{ data }] = useGetValidCategoryByGenreIdQuery({
    variables: { genreId: genreId ?? "", groupId },
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

  return (
    <Select
      label={""}
      value={categoryId}
      onChange={setCategoryId}
      data={categories}
      placeholder={"カテゴリを選択してください"}
      size={"xs"}
    />
  );
};

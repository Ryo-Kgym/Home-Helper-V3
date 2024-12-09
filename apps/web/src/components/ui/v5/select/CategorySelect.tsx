"use client";

import { useGetValidCategoryByGenreIdQuery } from "@v3/graphql/household";

import type { SelectData } from "../../Select";
import { useGroup } from "../../../../hooks/group/useGroup";
import { Select } from "../../Select";

export const CategorySelect = ({
  categoryId,
  setCategoryId,
  genreId,
  disabled,
}: {
  categoryId: string | null;
  setCategoryId: (_: string | null) => void;
  genreId: string | null;
  disabled?: boolean;
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
      disabled={disabled}
    />
  );
};

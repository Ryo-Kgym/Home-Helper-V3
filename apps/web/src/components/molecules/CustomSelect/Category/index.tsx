/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGetValidCategoryByGenreIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { Select, SelectData } from "@components/ui";

type CategorySelectProps = {
  categoryId: string | null;
  setCategoryId: (_: string | null) => void;
  genreId: string | null;
  setCategoryName?: (_: string | null) => void;
  disabled?: boolean;
};
export const CategorySelect = ({
  categoryId,
  setCategoryId,
  genreId,
  setCategoryName = () => {},
  disabled = false,
}: CategorySelectProps) => {
  const { groupId } = useGroup();

  const [{ data }] = useGetValidCategoryByGenreIdQuery({
    variables: { genreId, groupId },
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
      label={"CATEGORY"}
      value={categoryId}
      onChange={(_categoryId) => {
        setCategoryId(_categoryId);

        const categoryName =
          data?.genreById
            .flatMap((genre) =>
              genre.categories.filter((c) => c.id === _categoryId),
            )
            .map((c) => c.name)[0] ?? "";
        setCategoryName(categoryName);
      }}
      data={categories}
      placeholder={"カテゴリを選択してください"}
      withAsterisk
      disabled={disabled}
    />
  );
};

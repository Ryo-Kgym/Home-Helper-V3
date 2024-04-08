/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGroup } from "@hooks/group/useGroup";
import { useGetValidGenreListByIocomeTypeQuery } from "@v3/graphql/household";

import { GenreSelectPresenter } from "./GenreSelectPresenter";

import type { IocomeType } from "@domain/model/household/IocomeType";

type GenreSelectContainerProps = {
  genreId: string | null;
  setGenreId: (_: string | null) => void;
  iocomeType: IocomeType;
  setGenreName?: (_: string | null) => void;
  disabled?: boolean;
};
export const GenreSelectContainer = ({
  genreId,
  setGenreId,
  iocomeType,
  setGenreName = () => undefined,
  disabled = false,
}: GenreSelectContainerProps) => {
  const { groupId } = useGroup();
  const [{ data }] = useGetValidGenreListByIocomeTypeQuery({
    variables: { iocomeType: iocomeType, groupId },
  });

  const genres =
    data?.allGenresList?.map((genre) => ({
      label: genre.genreName,
      value: genre.genreId,
      description: genre.categoriesByGenreIdList
        .map((c) => c.categoryName)
        .join(", "),
    })) ?? [];

  return (
    <GenreSelectPresenter
      value={genreId}
      onChange={(value) => {
        const categoryName = genres.find((g) => g.value === value)?.label ?? "";
        setGenreId(value);
        setGenreName(categoryName);
      }}
      genres={genres}
      disabled={disabled}
    />
  );
};

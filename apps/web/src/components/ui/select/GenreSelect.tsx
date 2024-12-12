"use client";

import { useGetValidGenreListByIocomeTypeQuery } from "@v3/graphql/household";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { useGroup } from "../../../hooks/group/useGroup";
import { Select } from "../index";

export const GenreSelect = ({
  genreId,
  setGenreId,
  iocomeType,
  disabled,
  withLabel = false,
}: {
  genreId: string | null;
  setGenreId: (_: string | null) => void;
  iocomeType: IocomeType;
  disabled?: boolean;
  withLabel?: boolean;
}) => {
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
    <Select
      label={withLabel ? "ジャンル" : ""}
      value={genreId}
      onChange={setGenreId}
      data={genres}
      placeholder={"ジャンルを選択してください"}
      size={"xs"}
      disabled={disabled}
    />
  );
};

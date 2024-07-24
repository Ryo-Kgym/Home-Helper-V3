"use client";

import type { IocomeType } from "@domain/model/household/IocomeType";
import { Select } from "@components/ui/v4/select";
import { useGroup } from "@hooks/group/useGroup";
import { useGetValidGenreListByIocomeTypeQuery } from "@v3/graphql/household";

export const GenreSelect = ({
  genreId,
  setGenreId,
  iocomeType,
  disabled = false,
}: {
  genreId: string | null;
  setGenreId: (_: string | null) => void;
  iocomeType: IocomeType;
  disabled?: boolean;
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
      label={""}
      value={genreId ?? ""}
      setValue={(value) => {
        setGenreId(value);
      }}
      data={genres}
      placeholder={"ジャンルを選択してください"}
      disabled={disabled}
    />
  );
};

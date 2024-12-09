"use client";

import { useGetValidGenreListByIocomeTypeQuery } from "@v3/graphql/household";

import { Select } from "../../../../components/ui";
import { IocomeType } from "../../../../domain/model/household/IocomeType";
import { useGroup } from "../../../../hooks/group/useGroup";

export const GenreSelect = ({
  genreId,
  setGenreId,
  iocomeType,
  disabled,
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
      value={genreId}
      onChange={setGenreId}
      data={genres}
      placeholder={"ジャンルを選択してください"}
      size={"xs"}
      disabled={disabled}
    />
  );
};

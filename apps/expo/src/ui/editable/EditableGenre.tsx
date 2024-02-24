import { useEffect } from "react";
import { Text, View } from "react-native";
import { useGetValidGenreListByIocomeTypeQuery } from "@v3/graphql/household";

import type { IocomeType } from "~/types/iocome-type";
import type { EditableProps } from "~/ui/editable/editable-props";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { Picker } from "../Picker";

export const EditableGenre = ({
  value,
  setValue,
  iocomeType,
}: EditableProps<string> & {
  iocomeType: IocomeType;
}) => {
  const { groupId } = useSaveGroupId();

  const [{ data }] = useGetValidGenreListByIocomeTypeQuery({
    variables: {
      groupId,
      iocomeType,
    },
  });

  const genres =
    data?.allGenresList.map((genre) => ({
      value: genre.genreId,
      label: genre.genreName,
    })) ?? [];

  const selectedCategories =
    data?.allGenresList
      .filter((g) => g.genreId === value)
      .flatMap((g) =>
        g.categoriesByGenreIdList.map((c) => ({
          id: c.categoryId,
          name: c.categoryName,
        })),
      ) ?? [];

  const description = (
    <View>
      <Text>カテゴリ</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
          padding: 8,
        }}
      >
        {selectedCategories.map((c) => (
          <Text key={c.id}>{c.name}</Text>
        ))}
      </View>
    </View>
  );

  useEffect(
    () => {
      if (!value && genres[0]) {
        setValue(genres[0].value);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [genres],
  );

  return (
    <Picker
      title={"ジャンル"}
      value={value}
      setValue={setValue}
      data={genres}
      description={description}
    />
  );
};

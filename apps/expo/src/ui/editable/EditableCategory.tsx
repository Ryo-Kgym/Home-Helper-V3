import { useGetValidCategoryByGenreIdQuery } from "@v3/graphql/household";
import { useEffect } from "react";

import { Picker } from "../Picker";

import type { EditableProps } from "~/ui/editable/editable-props";

import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";

export const EditableCategory = ({
  value,
  setValue,
  genreId,
}: EditableProps<string> & {
  genreId: string;
}) => {
  const { groupId } = useSaveGroupId();

  const [{ data }] = useGetValidCategoryByGenreIdQuery({
    variables: {
      groupId,
      genreId,
    },
  });

  const categories =
    data?.genre?.categories.map((category) => ({
      value: category.id,
      label: category.name,
    })) ?? [];

  useEffect(
    () => {
      if (!value && categories[0]) {
        setValue(categories[0].value);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [categories],
  );

  return (
    <Picker
      title={"カテゴリ"}
      value={value}
      setValue={setValue}
      data={categories}
    />
  );
};

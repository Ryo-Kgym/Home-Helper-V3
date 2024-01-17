import { useGetValidCategoryByGenreIdQuery } from "@/turbo/graphql/household";

import type { EditableProps } from "~/ui/editable/editable-props";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { Picker } from "../Picker";

export const EditableCategory = ({
  value,
  setValue,
  genreId,
}: EditableProps<string> & {
  defaultValue: string;
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

  return <Picker value={value} setValue={setValue} data={categories} />;
};

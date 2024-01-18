import { useGetValidGenreListByIocomeTypeQuery } from "@/turbo/graphql/household";

import type { IocomeType } from "~/types/iocome-type";
import type { EditableProps } from "~/ui/editable/editable-props";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { Picker } from "../Picker";

export const EditableGenre = ({
  value,
  setValue,
  iocomeType,
}: EditableProps<string> & {
  defaultValue: string;
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

  return <Picker value={value} setValue={setValue} data={genres} />;
};

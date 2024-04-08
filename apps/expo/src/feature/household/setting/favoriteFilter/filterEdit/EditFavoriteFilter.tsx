import { useState } from "react";
import { Text, View } from "react-native";

import { useEditFavoriteFilter } from "./useEditFavoriteFilter";

import { UpdateButton } from "~/ui";
import { TextField } from "~/ui/TextField";

export const EditFavoriteFilter = ({
  filter,
  updateAfterHandler = () => undefined,
}: {
  filter: {
    id: string;
    name: string;
  };
  updateAfterHandler?: () => void;
}) => {
  const [filterName, setFilterName] = useState<string>(filter.name);
  const { editFavoriteFilter } = useEditFavoriteFilter();

  const updateHandler = async () => {
    try {
      await editFavoriteFilter({
        filterId: filter.id,
        name: filterName,
      });
      alert("更新しました");
      updateAfterHandler();
    } catch (e) {
      console.error(e);
      alert("更新に失敗しました");
    }
  };

  return (
    <View>
      <Text>名称</Text>
      <TextField value={filterName} setValue={setFilterName} />
      <UpdateButton updateHandler={updateHandler} />
    </View>
  );
};

import { useState } from "react";
import { Text, View } from "react-native";

import { RegisterButton, UpdateButton } from "~/ui";
import { TextField } from "~/ui/TextField";
import { useEditFavoriteFilter } from "./useEditFavoriteFilter";

export const EditFavoriteFilter = ({
  filterId,
  updateAfterHandler = () => undefined,
}: {
  filterId: string;
  updateAfterHandler?: () => void;
}) => {
  const [filterName, setFilterName] = useState<string>("");
  const { editFavoriteFilter } = useEditFavoriteFilter();

  const updateHandler = async () => {
    try {
      await editFavoriteFilter({
        filterId,
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

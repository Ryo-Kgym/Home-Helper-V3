import { useState } from "react";
import { Text, View } from "react-native";

import { RegisterButton } from "~/ui";
import { TextField } from "~/ui/TextField";
import { useEditFavoriteFilter } from "./useEditFavoriteFilter";

export const EditFavoriteFilter = () => {
  const [filterName, setFilterName] = useState<string>("");
  const { editFavoriteFilter } = useEditFavoriteFilter();

  const registerHandler = async () => {
    try {
      await editFavoriteFilter({ name: filterName });
      alert("更新しました");
    } catch (e) {
      console.error(e);
      alert("更新に失敗しました");
    }
  };

  return (
    <View>
      <Text>名称</Text>
      <TextField value={filterName} setValue={setFilterName} />
      <RegisterButton registerHandler={registerHandler} />
    </View>
  );
};

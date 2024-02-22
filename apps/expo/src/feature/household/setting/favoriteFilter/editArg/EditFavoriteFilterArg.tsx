import { useState } from "react";
import { Text, View } from "react-native";

import type { FavoriteFilterArgKey } from "../favorite-filter-type";
import { UpdateButton } from "~/ui";
import { FavoriteFilterArgKeyPicker, FavoriteFilterArgValueInput } from "../ui";
import { useEditFavoriteFilterArg } from "./useEditFavoriteFilterArg";

export const EditFavoriteFilterArg = ({
  argId,
  updateAfterHandler = () => undefined,
}: {
  argId: string;
  updateAfterHandler?: () => void;
}) => {
  const [key, setKey] = useState<FavoriteFilterArgKey>("categoryId");
  const [value, setValue] = useState<string>("");
  const { editFavoriteFilterArg } = useEditFavoriteFilterArg();
  const active = !!value && !!key;

  const editHandler = async () => {
    try {
      await editFavoriteFilterArg({
        argId,
        value,
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
      <Text>Key</Text>
      <FavoriteFilterArgKeyPicker value={key} setValue={setKey} disabled />
      <FavoriteFilterArgValueInput
        argKey={key}
        value={value}
        setValue={setValue}
      />
      <UpdateButton updateHandler={editHandler} disabled={!active} />
    </View>
  );
};

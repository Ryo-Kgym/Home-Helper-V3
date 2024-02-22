import { useState } from "react";
import { Text, View } from "react-native";

import type { FavoriteFilterArgKey } from "../favorite-filter-type";
import { useAddFavoriteFilterArg } from "~/feature/household/setting/favoriteFilter/addArg/useAddFavoriteFilterArg";
import { RegisterButton } from "~/ui";
import { FavoriteFilterArgKeyPicker, FavoriteFilterArgValueInput } from "../ui";

export const EditFavoriteFilterArg = ({ filterId }: { filterId: string }) => {
  const [key, setKey] = useState<FavoriteFilterArgKey>("categoryId");
  const [value, setValue] = useState<string>("");
  const { addFavoriteFilterArg } = useAddFavoriteFilterArg();
  const addHandler = async () => {
    try {
      await addFavoriteFilterArg({
        filterId,
        key,
        value,
      });
      alert("登録しました");
    } catch (e) {
      console.error(e);
      alert("登録に失敗しました");
    }
  };

  return (
    <View>
      <Text>Key</Text>
      <FavoriteFilterArgKeyPicker value={key} setValue={setKey} />
      <FavoriteFilterArgValueInput
        argKey={key}
        value={value}
        setValue={setValue}
      />
      <RegisterButton registerHandler={addHandler} />
    </View>
  );
};

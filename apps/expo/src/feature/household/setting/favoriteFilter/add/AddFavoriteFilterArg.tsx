import { useState } from "react";
import { Text, View } from "react-native";

import type { FavoriteFilterArgKey } from "../favorite-filter-type";
import { RegisterButton } from "~/ui";
import { FavoriteFilterArgKeyPicker, FavoriteFilterArgValueInput } from "../ui";

export const AddFavoriteFilterArg = ({ filterId }: { filterId: string }) => {
  filterId;
  const [key, setKey] = useState<FavoriteFilterArgKey>("categoryId");
  const [value, setValue] = useState<string>("");
  const addHandler = () => undefined;

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

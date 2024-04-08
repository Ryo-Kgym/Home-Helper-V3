import { useState } from "react";
import { Text, View } from "react-native";

import { useRegisterFavoriteFilter } from "./useRegisterFavoriteFilter";

import { RegisterButton } from "~/ui";
import { TextField } from "~/ui/TextField";

export const RegisterFavoriteFilter = () => {
  const [filterName, setFilterName] = useState<string>("");
  const { registerFavoriteFilter } = useRegisterFavoriteFilter();

  const registerHandler = async () => {
    try {
      await registerFavoriteFilter({ name: filterName });
      alert("登録しました");
    } catch (e) {
      console.error(e);
      alert("登録に失敗しました");
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

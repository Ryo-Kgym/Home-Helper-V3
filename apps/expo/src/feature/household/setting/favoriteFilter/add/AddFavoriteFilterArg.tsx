import { Text, View } from "react-native";

import { RegisterButton } from "~/ui";

export const AddFavoriteFilterArg = ({ filterId }: { filterId: string }) => {
  filterId;
  const addHandler = () => undefined;

  return (
    <View>
      <Text>登録</Text>
      <RegisterButton registerHandler={addHandler} />
    </View>
  );
};

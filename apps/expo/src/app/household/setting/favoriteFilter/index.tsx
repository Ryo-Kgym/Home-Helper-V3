import { View } from "react-native";
import { Stack } from "expo-router";

import { FavoriteFilterList } from "~/feature/household/setting";

const Page = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "お気に入り条件" }} />
      <View className={"w-full"}>
        <FavoriteFilterList />
      </View>
    </View>
  );
};

export default Page;

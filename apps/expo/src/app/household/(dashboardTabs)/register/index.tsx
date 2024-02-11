import { View } from "react-native";
import { Stack } from "expo-router";

import { RegisterDaily } from "~/feature/household/daily";

const Page = () => (
  <View>
    <Stack.Screen options={{ headerShown: false }} />
    <View className={"w-full p-5"}>
      <RegisterDaily />
    </View>
  </View>
);

export default Page;

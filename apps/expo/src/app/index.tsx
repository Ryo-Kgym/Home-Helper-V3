import { View } from "react-native";
import { Stack } from "expo-router";

import { AppList } from "~/feature/app";

const Page = () => (
  <>
    <Stack.Screen options={{ headerTitle: "アプリ" }} />
    <View className={"p-3"}>
      <AppList />
    </View>
  </>
);

export default Page;

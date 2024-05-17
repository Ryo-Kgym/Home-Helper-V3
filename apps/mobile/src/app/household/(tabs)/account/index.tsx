import { View } from "react-native";
import { Stack } from "expo-router";

import { BalanceList } from "~/feature/household/balance";

const Page = () => (
  <View>
    <Stack.Screen options={{ headerShown: false }} />
    <BalanceList />
  </View>
);

export default Page;

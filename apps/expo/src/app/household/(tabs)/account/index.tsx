import { View } from "react-native";
import { Stack } from "expo-router";

import { BalanceList } from "~/components/page/household/balance";

const Page = () => (
  <View>
    <Stack.Screen options={{ title: "Balance" }} />
    <BalanceList />
  </View>
);

export default Page;

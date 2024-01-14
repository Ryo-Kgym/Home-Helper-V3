import { View } from "react-native";
import { Stack } from "expo-router";

import { HouseholdDashboard } from "~/components/page/household";

const Page = () => (
  <View>
    <Stack.Screen options={{ title: "Dashboard" }} />
    <HouseholdDashboard />
  </View>
);
export default Page;

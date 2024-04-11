import { View } from "react-native";
import { Stack } from "expo-router";

import { HouseholdDashboard } from "~/feature/household/dashboard";

const Page = () => (
  <View>
    <Stack.Screen options={{ headerShown: false }} />
    <HouseholdDashboard />
  </View>
);
export default Page;

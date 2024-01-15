import { View } from "react-native";
import { Stack } from "expo-router";
import { HouseholdDashboard } from "src/feature/household";

const Page = () => (
  <View>
    <Stack.Screen options={{ title: "Dashboard" }} />
    <HouseholdDashboard />
  </View>
);
export default Page;

import { View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Calendar } from "src/feature/household/calendar";

const Page = () => {
  const { date } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: date as string }} />
      <Calendar baseDate={new Date(date as string)} />
    </View>
  );
};

export default Page;

import { View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { DailyDetail } from "~/feature/household/daily";

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "" }} />
      <DailyDetail id={id as string} />
    </View>
  );
};

export default Page;

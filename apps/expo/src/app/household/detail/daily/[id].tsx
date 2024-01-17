import { View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { DailyDetail } from "~/feature/household/daily";

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "" }} />
      <View className={"w-full p-5"}>
        <DailyDetail id={id as string} />
      </View>
    </View>
  );
};

export default Page;

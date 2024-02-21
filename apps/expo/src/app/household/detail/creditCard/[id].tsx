import { View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { EditCreditCardDetail } from "~/feature/household/creditCardDetail";

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <View className={"w-full p-5"}>
        <EditCreditCardDetail id={id as string} />
      </View>
    </View>
  );
};

export default Page;

import { View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { DetailListByAccount } from "~/feature/household/detailList";

const Page = () => {
  const { accountId } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "詳細" }} />
      <View className={"w-full"}>
        <DetailListByAccount accountId={accountId as string} />
      </View>
    </View>
  );
};

export default Page;

import { View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { DetailListByCreditCardSummary } from "~/feature/household/detailList";

const Page = () => {
  const { summaryId } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "" }} />
      <View className={"w-full"}>
        <DetailListByCreditCardSummary summaryId={summaryId as string} />
      </View>
    </View>
  );
};

export default Page;

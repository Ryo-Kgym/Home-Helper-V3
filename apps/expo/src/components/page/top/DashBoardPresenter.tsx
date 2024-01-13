import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export const DashBoardPresenter = ({
  accounts,
}: {
  accounts: { id: string; name: string; balance: number }[];
}) => (
  <SafeAreaView>
    <Stack.Screen options={{ title: "Top" }} />
    <View className="">
      <FlatList
        data={accounts}
        renderItem={(a) => (
          <View key={a.item.id} className="flex-row px-4 text-black">
            <Text className="w-2/3 text-xl">{a.item.name}</Text>
            <Text className="w-1/3 text-right text-xl">
              {a.item.balance.toLocaleString()}
            </Text>
          </View>
        )}
      />
    </View>
  </SafeAreaView>
);

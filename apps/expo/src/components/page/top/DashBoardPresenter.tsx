import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";

export const DashBoardPresenter = ({}: {}) => (
  <SafeAreaView>
    <Stack.Screen options={{ title: "Top" }} />
    <View className="">
      <Text className="text-2xl">ダッシュボード</Text>
      <Link
        className="bg-blue-500 px-4 py-2 text-white"
        href={"/household/account/"}
      >
        Account
      </Link>
    </View>
  </SafeAreaView>
);

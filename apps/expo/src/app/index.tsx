import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView className="bg-[#000000]">
      <Stack.Screen options={{ title: "Daily" }} />
      <View className="h-full w-full p-4">
        <Text className="pb-2 text-center text-5xl font-bold text-white">
          Create <Text className="text-pink-400">T3</Text> Turbo
        </Text>

        <Button
          onPress={() => undefined}
          title="Refresh posts"
          color={"#729bf4"}
        />

        <View className="py-2">
          <Text className="font-semibold italic text-black">
            Press on a post
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Index;

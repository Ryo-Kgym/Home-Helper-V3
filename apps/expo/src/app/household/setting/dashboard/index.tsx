import { View } from "react-native";
import { Stack } from "expo-router";

import { DashboardSetting } from "~/feature/household/setting";

const Page = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "ダッシュボード設定" }} />
      <View className={"w-full"}>
        <DashboardSetting />
      </View>
    </View>
  );
};

export default Page;

import { View } from "react-native";
import { Stack } from "expo-router";

import { DashboardSettingList } from "~/feature/household/setting";

const Page = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "ダッシュボード設定" }} />
      <View className={"w-full"}>
        <DashboardSettingList />
      </View>
    </View>
  );
};

export default Page;

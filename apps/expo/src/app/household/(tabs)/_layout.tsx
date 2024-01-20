import { Stack, Tabs } from "expo-router";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons/";

const Layout = () => (
  <>
    <Stack.Screen options={{ title: "" }} />
    <Tabs>
      <Tabs.Screen
        name="calendar/[date]"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={24} color={color} />
          ),
          href: `/household/calendar/${new Date().toISOString().slice(0, 10)}`,
        }}
      />
      <Tabs.Screen
        name="account/index"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bank" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="register/index"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="pencil" size={30} color={color} />
          ),
          title: "登録",
        }}
      />
    </Tabs>
  </>
);
export default Layout;

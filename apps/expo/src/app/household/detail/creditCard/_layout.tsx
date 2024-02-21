import { Stack, Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const Layout = () => (
  <>
    <Stack.Screen options={{ title: "" }} />
    <Tabs>
      <Tabs.Screen
        name="[id]"
        options={{
          title: "編集",
          tabBarIcon: ({ color }) => (
            <AntDesign name="edit" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  </>
);
export default Layout;

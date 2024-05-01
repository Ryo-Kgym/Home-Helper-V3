import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider as UrqlProvider } from "urql";

import "react-native-url-polyfill/auto";
import "/styles.css";

import { datasource } from "~/config/datasource";

const Layout = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <UrqlProvider value={datasource}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffa400",
          },
        }}
      />
      <StatusBar />
    </UrqlProvider>
  </GestureHandlerRootView>
);
export default Layout;

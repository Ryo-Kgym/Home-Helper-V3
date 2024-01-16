import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider as UrqlProvider } from "urql";

import "../styles.css";

import { datasource } from "~/config/datasource";

const Layout = () => (
  <UrqlProvider value={datasource}>
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#40ff40",
        },
      }}
    />
    <StatusBar />
  </UrqlProvider>
);
export default Layout;

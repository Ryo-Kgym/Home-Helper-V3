import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { datasource } from "@/turbo/graphql";
import { Provider as UrqlProvider } from "urql";

import "../styles.css";

const Layout = () => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

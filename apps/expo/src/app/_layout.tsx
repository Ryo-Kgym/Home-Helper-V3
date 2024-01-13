import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import "../styles.css";

const Layout = () => (
  <>
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#40ff40",
        },
      }}
    />
    <StatusBar />
  </>
);
export default Layout;

import { View } from "react-native";
import { Stack } from "expo-router";

import { Link } from "~/components/ui";

export const AppListPresenter = ({
  apps,
}: {
  apps: { appName: string; path: string }[];
}) => (
  <View>
    <Stack.Screen options={{ title: "App" }} />
    {apps.map((app, index) => (
      <Link key={index} label={app.appName} path={app.path} size={"md"} />
    ))}
  </View>
);

import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { paths } from "~/app/paths";
import { Link } from "~/components/ui";

export const AppListPresenter = ({
  apps,
}: {
  apps: { appName: string; path: string }[];
}) => (
  <SafeAreaView>
    <Stack.Screen options={{ title: "App" }} />
    {apps.map((app, index) => (
      <Link
        key={index}
        label={app.appName}
        path={paths.household.account}
        size={"md"}
      />
    ))}
  </SafeAreaView>
);

import { FlatList, Pressable, Text } from "react-native";
import { Link, Stack } from "expo-router";

export const AppListPresenter = ({
  apps,
}: {
  apps: { appName: string; path: string }[];
}) => (
  <>
    <Stack.Screen options={{ title: "App" }} />
    <FlatList
      data={apps}
      renderItem={({ item: app }) => (
        <Pressable className={"rounded-2xl border-2 p-4"}>
          <Link href={app.path as `./`}>
            <Text className={"text-xl"}>{app.appName}</Text>
          </Link>
        </Pressable>
      )}
    />
  </>
);

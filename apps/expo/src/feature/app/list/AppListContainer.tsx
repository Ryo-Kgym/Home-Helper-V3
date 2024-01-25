import { Text } from "react-native";
import { useGetAppsQuery } from "@v3/graphql/public";

import { paths } from "~/app/paths";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { AppListPresenter } from "./AppListPresenter";

export const AppListContainer = () => {
  const { groupId } = useSaveGroupId();
  const [{ data, fetching }] = useGetAppsQuery({ variables: { groupId } });

  if (fetching) return <Text>Loading...</Text>;

  const apps =
    data?.group.map((g) => ({
      appName: g.app.name,
      path: paths.household.dashboard,
    })) ?? [];

  return <AppListPresenter apps={apps} />;
};

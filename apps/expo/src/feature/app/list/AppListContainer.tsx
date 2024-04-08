import { useGetApplicationsQuery } from "@v3/graphql/public";
import { Text } from "react-native";

import { AppListPresenter } from "./AppListPresenter";

import { paths } from "~/app/paths";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";

export const AppListContainer = () => {
  const { groupId } = useSaveGroupId();
  const [{ data, fetching }] = useGetApplicationsQuery({
    variables: { groupId },
  });

  if (fetching) return <Text>Loading...</Text>;

  const apps =
    data?.group?.groupApplications.map((g) => ({
      appName: g.application.name,
      path: paths.household.dashboard,
    })) ?? [];

  return <AppListPresenter apps={apps} />;
};

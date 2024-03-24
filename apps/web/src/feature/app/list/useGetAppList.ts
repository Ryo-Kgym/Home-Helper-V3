import type { LinkProps } from "@components/atoms/Card";
import { useFindUser } from "@persistence/browser/client/useFindUser";
import { paths } from "@routing/paths";
import { useGetApplicationsQuery } from "@v3/graphql/public";

export const useGetAppList = () => {
  const { group } = useFindUser();
  const [{ data }] = useGetApplicationsQuery({
    variables: {
      groupId: group.id,
    },
  });

  const appList: AppListType[] = [
    ...(data?.group?.groupApplications.map((ga) => ({
      label: ga.application.name ?? "",
      href: ga.application.topUrl ?? "",
    })) ?? []),

    ...(data?.group?.apps.map((app) => ({
      label: app.name ?? "",
      href: paths.app.show({ id: app.id }),
    })) ?? []),
  ];

  return { appList };
};

export type AppListType = LinkProps;

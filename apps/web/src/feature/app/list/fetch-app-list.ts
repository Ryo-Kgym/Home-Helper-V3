import { GetApplicationsDocument } from "@v3/graphql/public/type";

import type { LinkProps } from "~/components/atoms/Card";
import { fetchQuery } from "~/persistence/database/server/fetchQuery";
import { paths } from "~/routing/paths";

export const fetchAppList = async ({ groupId }: { groupId: string }) => {
  const { data } = await fetchQuery(GetApplicationsDocument, { groupId });

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

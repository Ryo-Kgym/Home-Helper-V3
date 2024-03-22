import type { LinkProps } from "@components/atoms/Card";
import { SelectAppClient } from "@feature/app/list/SelectAppClient";
import { findUser } from "@persistence/browser/server/find-user";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { paths } from "@routing/paths";
import { GetApplicationsDocument } from "@v3/graphql/public/type";

export const SelectAppServer = async () => {
  const { group } = await findUser();
  const { data } = await fetchQuery(GetApplicationsDocument, {
    groupId: group.id,
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

  return <SelectAppClient data={appList} />;
};

export type AppListType = LinkProps;

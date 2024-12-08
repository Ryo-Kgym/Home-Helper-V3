import { GetViewsDocument } from "@v3/graphql/public/type";

import type { LinkProps } from "~/components/atoms/Card";
import { fetchQuery } from "~/persistence/database/server/fetchQuery";
import { paths } from "~/routing/paths";

export const fetchViewList = async ({ groupId }: { groupId: string }) => {
  const { data } = await fetchQuery(GetViewsDocument, { groupId });

  const viewList: AppListType[] =
    data?.group?.views.map((view) => ({
      label: view.name ?? "",
      href: paths.view.show({ id: view.id }),
    })) ?? [];

  return { viewList };
};

export type AppListType = LinkProps;

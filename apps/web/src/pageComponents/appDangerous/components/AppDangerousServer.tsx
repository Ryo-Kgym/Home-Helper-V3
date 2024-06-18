import { ViewDeleteRelations } from "@features/viewDelete/types/viewDeleteRelations";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetViewDangerousSourceDocument } from "@v3/graphql/public/type";

import { AppDangerousClient } from "./AppDangerousClient";

export const AppDangerousServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetViewDangerousSourceDocument, {
    viewId: appId,
  });

  const appDeleteRelations: ViewDeleteRelations = {
    view: {
      id: appId,
      name: data?.view?.name ?? "",
    },
    summaries:
      data?.view?.summaryViews.map((s) => ({
        id: s.id,
        name: s.name,
      })) ?? [],
    apps:
      data?.view?.viewApps.map((a) => ({
        id: a.id,
        name: a.app.name,
      })) ?? [],
    fields:
      data?.view?.viewFields.map((f) => ({
        id: f.id,
        name: f.name,
      })) ?? [],
  };

  return <AppDangerousClient appDeleteRelations={appDeleteRelations} />;
};

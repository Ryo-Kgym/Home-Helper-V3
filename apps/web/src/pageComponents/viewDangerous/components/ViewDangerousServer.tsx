import { GetViewDangerousSourceDocument } from "@v3/graphql/public/type";

import { fetchQuery } from "~/persistence/database/server/fetchQuery";
import { ViewDeleteRelations } from "../../../features/viewDelete/types/viewDeleteRelations";
import { ViewDangerousClient } from "./ViewDangerousClient";

export const ViewDangerousServer = async ({ viewId }: { viewId: string }) => {
  const { data } = await fetchQuery(GetViewDangerousSourceDocument, {
    viewId,
  });

  const viewDeleteRelations: ViewDeleteRelations = {
    view: {
      id: viewId,
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

  return <ViewDangerousClient viewDeleteRelations={viewDeleteRelations} />;
};

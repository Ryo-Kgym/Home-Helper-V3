import { GetAppDangerousSourceDocument } from "@v3/graphql/public/type";

import { fetchQuery } from "~/persistence/database/server/fetchQuery";
import { AppDeleteRelations } from "../../../features/appDelete/types/appDeleteRelations";
import { AppDangerousClient } from "./AppDangerousClient";

export const AppDangerousServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDangerousSourceDocument, {
    appId,
  });

  const appDeleteRelations: AppDeleteRelations = {
    app: {
      id: data?.app?.id ?? "",
      name: data?.app?.name ?? "",
    },
    fields: {
      nodes:
        data.app?.fields.map((field) => ({
          id: field.id,
          name: field.name,
        })) ?? [],
    },
    importFileHistories: {
      nodes:
        data.app?.importFileHistories.map((importFileHistory) => ({
          id: importFileHistory.id,
          name: importFileHistory.fileName,
        })) ?? [],
    },
    importFileRecords: {
      count: data.app?.importFileRecordsAggregate.aggregate?.count ?? 0,
    },
    importFileSetting: {
      id: data.app?.importFileSetting?.appId ?? "",
      count: data.app?.importFileSetting?.appId ? 1 : 0,
    },
    records: {
      count: data.app?.recordsAggregate.aggregate?.count ?? 0,
    },
    viewApps: {
      nodes:
        data.app?.viewApps.map((viewApp) => ({
          id: viewApp.id,
          name: viewApp.view.name,
        })) ?? [],
    },
  };

  return <AppDangerousClient appDeleteRelations={appDeleteRelations} />;
};

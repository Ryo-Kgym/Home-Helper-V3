import { importFileSettingsSchema } from "@feature/app/schema/import-file-settings-schema";
import { convertToApp } from "@feature/record/list/convert-to-app";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import {
  GetAppDocument,
  GetImportFileSettingsDocument,
} from "@v3/graphql/public/type";

import { RecordImportClient } from "./RecordImportClient";

export const RecordImportServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = convertToApp(data);

  const { data: settingData } = await fetchQuery(
    GetImportFileSettingsDocument,
    {
      appId,
    },
  );
  const importFileSettings = importFileSettingsSchema.parse(
    settingData.importFileSetting?.settings,
  );

  return (
    <RecordImportClient app={app} importFileSettings={importFileSettings} />
  );
};

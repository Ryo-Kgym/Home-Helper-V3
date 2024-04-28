import { convertToApp } from "@feature/app/recordList/convertToApp";
import { importFileSettingsSchema } from "@oneforall/domain/schema/importFileSettingsSchema";
import { convertToImportFileFieldMapping } from "@pages/appRecordImport/server/convertToImportFileFieldMapping";
import { convertToImportHistories } from "@pages/appRecordImport/server/convertToImportHistories";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetAppDocument, GetImportFileDocument } from "@v3/graphql/public/type";

import { RecordImportClient } from "./RecordImportClient";

export const RecordImportServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = convertToApp(data);

  const { data: importFileData } = await fetchQuery(GetImportFileDocument, {
    appId,
  });

  const requiredInitializeSettings = !importFileData.importFileSetting;

  const importFileSettings = importFileSettingsSchema.parse(
    importFileData.importFileSetting?.settings,
  );

  const importHistories = convertToImportHistories(
    importFileData.importFileHistories,
  );

  const importFileFieldMapping = convertToImportFileFieldMapping(app.fields);

  return (
    <RecordImportClient
      app={app}
      importFileSettings={importFileSettings}
      importHistories={importHistories}
      requiredInitializeSettings={requiredInitializeSettings}
      importFileFieldMapping={importFileFieldMapping}
    />
  );
};

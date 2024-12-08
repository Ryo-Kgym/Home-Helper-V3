import { importFileSettingsSchema } from "@oneforall/domain/schema/importFileSettingsSchema";
import { parseToApp } from "@v3/graphql/public/convert/parseToApp";
import { GetAppDocument, GetImportFileDocument } from "@v3/graphql/public/type";

import { fetchQuery } from "~/persistence/database/server/fetchQuery";
import { getLookupRecords } from "~/server/lookupRecords";
import { convertToImportFileFieldMapping } from "../server/convertToImportFileFieldMapping";
import { convertToImportHistories } from "../server/convertToImportHistories";
import { RecordImportClient } from "./RecordImportClient";

export const RecordImportServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = parseToApp(data);

  const lookupRecords = await getLookupRecords(app);

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
      lookupRecords={lookupRecords}
    />
  );
};

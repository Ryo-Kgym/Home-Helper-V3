import { convertToApp } from "@feature/app/recordList/convert-to-app";
import { previewColumnsSchema } from "@oneforall/domain/schema";
import { importFileSettingsSchema } from "@oneforall/domain/schema/importFileSettingsSchema";
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

  const importHistories = importFileData.importFileHistories.map((h) => ({
    id: h.id,
    importDate: h.importDatetime,
    fileName: h.fileName,
    importCount: h.count,
    importFileRecords: Object.fromEntries(
      h.importFileRecords.map((r) => [
        r.record.index,
        {
          recordId: r.record.id,
          isEditing: false,
          columns: previewColumnsSchema.parse(r.record.columns),
        },
      ]),
    ),
  }));

  return (
    <RecordImportClient
      app={app}
      importFileSettings={importFileSettings}
      importHistories={importHistories}
      requiredInitializeSettings={requiredInitializeSettings}
    />
  );
};

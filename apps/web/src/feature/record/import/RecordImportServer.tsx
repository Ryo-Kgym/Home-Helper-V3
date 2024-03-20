import { convertToApp } from "@feature/record/list/convert-to-app";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { FileType } from "@provider/file/FileType";
import { getSetting } from "@provider/file/loader/csv/CsvFileSetting";
import { GetAppDocument } from "@v3/graphql/public/type";

import { RecordImportClient } from "./RecordImportClient";

export const RecordImportServer = async ({ appId }: { appId: string }) => {
  const { data } = await fetchQuery(GetAppDocument, { appId });
  const app = convertToApp(data);

  const importFileSettings = getSetting(FileType.SMBC_CSV);

  return (
    <RecordImportClient app={app} importFileSettings={importFileSettings} />
  );
};

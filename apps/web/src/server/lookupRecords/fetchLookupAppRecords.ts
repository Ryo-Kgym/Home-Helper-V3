import { convertToRecords } from "@oneforall/domain/convert/convertToRecords";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetRecordsInAppIdsDocument } from "@v3/graphql/public/type";

/**
 * @package
 */
export const fetchLookupAppRecords = async (appIds: string[]) => {
  const { data } = await fetchQuery(GetRecordsInAppIdsDocument, {
    appIds,
  });

  return Object.fromEntries(
    data.apps.map((app) => [app.id, convertToRecords(app.records)]),
  );
};

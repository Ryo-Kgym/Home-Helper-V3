import { parseToRecords } from "@v3/graphql/public/convert/parseToRecords";
import { GetRecordsInAppIdsDocument } from "@v3/graphql/public/type";

import { fetchQuery } from "~/persistence/database/server/fetchQuery";

// import { fetchQuery } from "~/persistence/database/server/fetchQuery";

/**
 * @package
 */
export const fetchLookupAppRecords = async (appIds: string[]) => {
  const { data } = await fetchQuery(GetRecordsInAppIdsDocument, {
    appIds,
  });

  return Object.fromEntries(
    data.apps.map((app) => [app.id, parseToRecords(app.records)]),
  );
};

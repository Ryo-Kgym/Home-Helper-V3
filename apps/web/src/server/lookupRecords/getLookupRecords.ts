import { App } from "@oneforall/domain/schema/appSchema";
import { LookupRecords } from "@server/lookupRecords/type";

import { convertToLookupOptions } from "./convertToLookupOptions";
import { fetchLookupAppRecords } from "./fetchLookupAppRecords";

/**
 * @package
 */
export const getLookupRecords = async (app: App): Promise<LookupRecords> => {
  const lookupOptions = convertToLookupOptions(app);

  const appRecords = await fetchLookupAppRecords(
    Object.values(lookupOptions).map((options) => options.appId),
  );

  return Object.fromEntries(
    Object.entries(lookupOptions).map(([fieldId, options]) => [
      fieldId,
      Object.fromEntries(
        Object.values(appRecords[options.appId] ?? {}).map((record) => [
          record.columns[options.saveFieldId]?.value,
          record.columns[options.selectFieldId]?.value,
        ]),
      ),
    ]),
  );
};

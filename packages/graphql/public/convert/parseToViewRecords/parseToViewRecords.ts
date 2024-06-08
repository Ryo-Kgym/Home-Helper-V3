import { ViewFilters } from "@oneforall/domain/schema/view/viewFilterSchema";
import { ViewRecords } from "@oneforall/domain/schema/view/viewRecordSchema";
import { ViewFields } from "@oneforall/domain/schema/view/viewSchema";

import { filterViewRecord } from "./filterViewRecord";
import { parseToViewRecordColumns } from "./parseToViewRecordColumns";
import { ViewAppsQuery } from "./type";

/**
 * @package
 */
export const parseToViewRecords = (
  viewFields: ViewFields,
  viewApps: ViewAppsQuery,
  // TODO test
  filters: ViewFilters = {},
): ViewRecords => {
  const viewAppsArray = viewApps.map((viewApp) => {
    return Object.fromEntries(
      viewApp.app.records
        .filter((appRecord) =>
          filterViewRecord(
            parseToViewRecordColumns(viewFields, viewApp.fields, appRecord),
            filters,
          ),
        )
        .map((appRecord) => [
          viewApp.id + "-" + appRecord.id,
          {
            appId: viewApp.appId,
            appName: viewApp.app.name,
            recordId: appRecord.id,
            columns: parseToViewRecordColumns(
              viewFields,
              viewApp.fields,
              appRecord,
            ),
          },
        ]),
    );
  });

  return (
    Object.fromEntries(viewAppsArray.flatMap((va) => Object.entries(va))) ?? {}
  );
};

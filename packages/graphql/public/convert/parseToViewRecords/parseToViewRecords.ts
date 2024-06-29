import { RecordFilters } from "@oneforall/domain/schema/filter/recordFiltersSchema";
import { ViewAppRaw } from "@oneforall/domain/schema/view/viewAppSchema";
import { ViewRecords } from "@oneforall/domain/schema/view/viewRecordSchema";
import { ViewFields } from "@oneforall/domain/schema/view/viewSchema";

import { filterViewRecord } from "./filterViewRecord";
import { parseToViewRecordColumns } from "./parseToViewRecordColumns";

/**
 * @package
 */
export const parseToViewRecords = (
  viewFields: ViewFields,
  viewAppRaws: ViewAppRaw[],
  filters: RecordFilters = {},
): ViewRecords =>
  Object.fromEntries(
    viewAppRaws
      .map((viewApp) => parseToViewAppRecords(viewFields, viewApp, filters))
      .flatMap((va) => Object.entries(va)),
  ) ?? {};

const parseToViewAppRecords = (
  viewFields: ViewFields,
  viewAppRaw: ViewAppRaw,
  filters: RecordFilters = {},
): ViewRecords =>
  Object.fromEntries(
    viewAppRaw.app.records
      .filter((appRecord) =>
        filterViewRecord(
          parseToViewRecordColumns(
            viewFields,
            viewAppRaw.viewAppFields,
            appRecord,
          ),
          filters,
        ),
      )
      .map((appRecord) => [
        viewAppRaw.id + "-" + appRecord.recordId,
        {
          viewAppId: viewAppRaw.id,
          appId: viewAppRaw.app.id,
          appName: viewAppRaw.app.name,
          recordId: appRecord.recordId,
          columns: parseToViewRecordColumns(
            viewFields,
            viewAppRaw.viewAppFields,
            appRecord,
          ),
        },
      ]),
  );

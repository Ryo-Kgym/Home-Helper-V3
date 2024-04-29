import { GetViewRecordsSourceQuery } from "@v3/graphql/public/type";

import { viewAppFieldSchema } from "../../../../../../packages/domain/schema/view/viewAppSchema";
import {
  viewRecordColumnSchema,
  ViewRecords,
} from "../../../../../../packages/domain/schema/view/viewRecordSchema";

export const convertToViewRecords = (
  recordsSource: GetViewRecordsSourceQuery,
): ViewRecords => {
  const viewAppsArray =
    recordsSource.view?.viewApps?.map((va) => {
      const appId = va.appId;

      const invertFiledIdRecord = Object.fromEntries(
        Object.entries(va.fields).map(([key, value]) => {
          const parsed = viewAppFieldSchema.safeParse(value);

          if (!parsed.success) {
            throw new Error("invalid viewAppFieldSchema");
          }

          return [parsed.data.appFieldId, key];
        }),
      );

      return Object.fromEntries(
        va.app.records.map((r) => [
          va.id + "-" + r.id,
          {
            appId,
            appName: va.app.name,
            recordId: r.id,
            columns: Object.fromEntries(
              Object.entries(r.columns)
                .filter(([key]) => invertFiledIdRecord[key])
                .map(([key, value]) => {
                  const fieldId = invertFiledIdRecord[key];
                  const parsed = viewRecordColumnSchema.safeParse(value);

                  if (!parsed.success) {
                    throw new Error("invalid viewRecordColumnSchema");
                  }

                  return [fieldId!, parsed.data];
                }),
            ),
          },
        ]),
      );
    }) ?? [];

  return (
    Object.fromEntries(viewAppsArray.flatMap((va) => Object.entries(va))) ?? {}
  );
};

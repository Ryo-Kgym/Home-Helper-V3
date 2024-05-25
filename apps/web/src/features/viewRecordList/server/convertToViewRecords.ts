import {
  viewRecordColumnSchema,
  ViewRecords,
} from "@oneforall/domain/schema/view/viewRecordSchema";
import { ViewFields } from "@oneforall/domain/schema/view/viewSchema";
import { GetViewRecordsSourceQuery } from "@v3/graphql/public/type";

type ViewAppQuery = NonNullable<
  NonNullable<GetViewRecordsSourceQuery>["view"]
>["viewApps"];

export const convertToViewRecords = (
  viewFields: ViewFields,
  viewApps: ViewAppQuery,
): ViewRecords => {
  const viewAppsArray = viewApps.map((viewApp) =>
    Object.fromEntries(
      viewApp.app.records.map((appRecord) => [
        viewApp.id + "-" + appRecord.id,
        {
          appId: viewApp.appId,
          appName: viewApp.app.name,
          recordId: appRecord.id,
          columns: Object.fromEntries(
            Object.entries(viewFields).map(([viewFieldId, attribute]) => {
              const appFieldId = viewApp.fields[viewFieldId].appFieldId;
              const appRecordColumn = appRecord.columns[appFieldId];
              const parsed = viewRecordColumnSchema.safeParse(appRecordColumn);

              if (!parsed.success) {
                return [
                  viewFieldId,
                  {
                    fieldKind: attribute.fieldKind,
                    options: attribute.options,
                    value: "", // データがない場合は空文字を入れる
                  },
                ];
              }

              return [viewFieldId, parsed.data];
            }),
          ),
        },
      ]),
    ),
  );

  return (
    Object.fromEntries(viewAppsArray.flatMap((va) => Object.entries(va))) ?? {}
  );
};

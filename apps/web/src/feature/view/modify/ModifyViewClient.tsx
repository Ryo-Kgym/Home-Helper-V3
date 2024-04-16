"use client";

import { useEffect } from "react";
import { Table } from "@components/ui/v4/table";
import {
  useGetViewApps,
  useSetViewApps,
} from "@feature/view/modify/useZustandViewAppsStore";
import { ViewAppOption } from "@feature/view/modify/ViewAppOption";
import { FieldKind } from "@oneforall/domain/field/type";
import { ViewFields } from "@oneforall/domain/schema/view/view-schema";

export type AppListData = {
  label: string;
  value: string;
  fields: { label: string; value: string; fieldKind: FieldKind }[];
}[];

export const ModifyViewClient = ({
  appListData,
  viewFields,
}: {
  appListData: AppListData;
  viewFields: ViewFields;
}) => {
  const setViewApp = useSetViewApps();
  const viewApps = useGetViewApps();

  useEffect(
    () => {
      setViewApp({});
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div>
      <div>
        <ViewAppOption appListData={appListData} viewFields={viewFields} />
      </div>
      <div>
        <Table>
          <Table.Header
            headerItems={[
              {
                name: "App ID",
              },
              ...Object.values(viewFields).map((field) => ({
                name: field.fieldName,
              })),
            ]}
          />
          <Table.Body
            data={Object.entries(viewApps).map(([appId, appFields]) => [
              {
                id: appId,
                name: appListData.find((a) => a.value === appId)?.label,
              },
              ...Object.values(appFields).map((appField) => ({
                id: appField.appFieldId,
                name: appListData
                  .find((a) => a.value === appId)
                  ?.fields.find((f) => f.value === appField.appFieldId)?.label,
              })),
            ])}
            renderItem={(columns) =>
              columns.map((col) => (
                <Table.BodyTd key={col.id}>{col.name}</Table.BodyTd>
              ))
            }
          />
        </Table>
      </div>
    </div>
  );
};

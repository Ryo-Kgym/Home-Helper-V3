"use client";

import { useEffect } from "react";
import { AppListData } from "@feature/view/modify/app-list-data";
import { ModifyViewAppButton } from "@feature/view/modify/ModifyViewAppButton";
import { useSetViewApps } from "@feature/view/modify/useZustandViewAppsStore";
import { ViewAppOption } from "@feature/view/modify/ViewAppOption";
import { ViewAppTable } from "@feature/view/modify/ViewAppTable";
import { ViewFields } from "@oneforall/domain/schema/view/view-schema";

export const ModifyViewClient = ({
  viewId,
  appListData,
  viewFields,
}: {
  viewId: string;
  appListData: AppListData;
  viewFields: ViewFields;
}) => {
  const setViewApp = useSetViewApps();

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
        <ViewAppTable appListData={appListData} viewFields={viewFields} />
      </div>
      <div>
        <ModifyViewAppButton viewId={viewId} />
      </div>
    </div>
  );
};

"use client";

import { useEffect } from "react";
import { useSetViewApps } from "@feature/view/modify/hook";
import { ModifyViewAppButton } from "@feature/view/modify/ModifyViewAppButton";
import { AppListData } from "@feature/view/modify/type/appListData";
import { InputViewApps } from "@feature/view/modify/type/inputViewApps";
import { ViewAppOption } from "@feature/view/modify/ViewAppOption";
import { ViewAppTable } from "@feature/view/modify/ViewAppTable";
import { ViewFields } from "@oneforall/domain/schema/view/view-schema";

/**
 * @package
 */
export const ModifyViewClient = ({
  viewId,
  appListData,
  viewFields,
  inputViewApps,
}: {
  viewId: string;
  appListData: AppListData;
  viewFields: ViewFields;
  inputViewApps: InputViewApps;
}) => {
  const setViewApp = useSetViewApps();

  useEffect(
    () => {
      setViewApp(inputViewApps);
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

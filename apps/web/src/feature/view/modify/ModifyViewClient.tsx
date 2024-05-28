"use client";

import { useEffect } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { RedirectViewRecordListButton } from "@feature/app/nav/RedirectViewRecordListButton";
import { useSetViewApps } from "@feature/view/modify/hook";
import { ModifyViewAppButton } from "@feature/view/modify/ModifyViewAppButton";
import { AppListData } from "@feature/view/modify/type/appListData";
import { InputViewApps } from "@feature/view/modify/type/inputViewApps";
import { ViewAppOption } from "@feature/view/modify/ViewAppOption";
import { ViewAppTable } from "@feature/view/modify/ViewAppTable";
import { ViewFields } from "@oneforall/domain/schema/view/viewSchema";

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
    <div className={"space-y-5"}>
      <Title title={"ビューを構成するアプリの設定"}>
        <RedirectViewRecordListButton viewId={viewId} />
      </Title>
      <ViewAppOption appListData={appListData} viewFields={viewFields} />
      <ViewAppTable appListData={appListData} viewFields={viewFields} />
      <ModifyViewAppButton viewId={viewId} />
    </div>
  );
};

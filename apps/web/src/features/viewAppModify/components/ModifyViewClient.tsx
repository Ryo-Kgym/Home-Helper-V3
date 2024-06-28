"use client";

import { useEffect } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { PageClientFrame } from "@components/ui/v4/PageClientFrame";
import { RedirectViewRecordListButton } from "@feature/app/nav/RedirectViewRecordListButton";
import { ViewFields } from "@oneforall/domain/schema/view/viewSchema";

import { useSetViewApps } from "../hook";
import { AppListData } from "../type/appListData";
import { InputViewApps } from "../type/inputViewApps";
import { ModifyViewAppButton } from "./ModifyViewAppButton";
import { ViewAppOption } from "./ViewAppOption";
import { ViewAppTable } from "./ViewAppTable";

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
    <PageClientFrame
      title={
        <Title title={"ビューを構成するアプリの設定"}>
          <RedirectViewRecordListButton viewId={viewId} />
        </Title>
      }
    >
      <ViewAppOption appListData={appListData} viewFields={viewFields} />
      <ViewAppTable appListData={appListData} viewFields={viewFields} />
      <ModifyViewAppButton viewId={viewId} />
    </PageClientFrame>
  );
};

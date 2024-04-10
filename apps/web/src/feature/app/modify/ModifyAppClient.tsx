"use client";

import { Title } from "@components/ui/v4/frame/Title";
import { AppFieldValue } from "@feature/app/create/app-field-value";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { FieldAddButton } from "@feature/app/create/FieldAddButton";
import { useInitializeAppFieldValue } from "@feature/app/create/useAppFieldValueState";
import { FieldInputTable } from "@feature/app/modify/FieldInputTable";
import { UpdateAppButton } from "@feature/app/modify/UpdateAppButton";
import { RedirectListButton } from "@feature/nav/RedirectListButton";
import { useEffect, useState } from "react";

export const ModifyAppClient = ({
  appId,
  appName: defaultAppName,
  fields: defaultFields,
}: {
  appId: string;
  appName: string;
  fields: AppFieldValue;
}) => {
  const [appName, setAppName] = useState<string>(defaultAppName);
  const initialize = useInitializeAppFieldValue();

  useEffect(() => {
    initialize(defaultFields);
  }, [initialize, defaultFields]);

  return (
    <div className={"space-y-10"}>
      <Title title={"アプリ設定"}>
        <RedirectListButton appId={appId} />
      </Title>
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <div className={"grid grid-cols-3 gap-2"}>
          <UpdateAppButton appId={appId} appName={appName} />
          <FieldAddButton />
        </div>
      </div>
      <FieldInputTable />
    </div>
  );
};

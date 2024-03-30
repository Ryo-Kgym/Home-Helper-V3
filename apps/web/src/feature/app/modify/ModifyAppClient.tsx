"use client";

import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useEffect, useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { FieldAddButton } from "@feature/app/create/FieldAddButton";
import {
  useGetAppFieldValue,
  useInitializeAppFieldValue,
} from "@feature/app/create/useAppFieldValueState";
import { AppFieldInput } from "@feature/app/field/AppFieldInput";
import { RedirectListButton } from "@feature/nav/RedirectListButton";

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
  const fields = useGetAppFieldValue();

  useEffect(() => {
    initialize(defaultFields);
  }, [defaultFields]);

  return (
    <div className={"space-y-10"}>
      <Title title={"アプリ設定"}>
        <RedirectListButton appId={appId} />
      </Title>
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <div className={"grid grid-cols-3 gap-2"}>
          <FieldAddButton />
        </div>
      </div>
      <div className={"space-y-2"}>
        {Object.keys(fields).map((index) => (
          <AppFieldInput key={index} index={parseInt(index)} />
        ))}
      </div>
    </div>
  );
};

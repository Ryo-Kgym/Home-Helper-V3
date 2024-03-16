"use client";

import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { AppField } from "@feature/app/create/AppField";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { FieldAddButton } from "@feature/app/create/FieldAddButton";
import { ModifyAppButton } from "@feature/app/modify/ModifyAppButton";
import { RedirectListButton } from "@feature/app/modify/RedirectListButton";

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
  const [value, setValue] = useState<AppFieldValue>(defaultFields);

  return (
    <div className={"space-y-10"}>
      <Title>
        <div className={"text-3xl"}>{"アプリ設定"}</div>
        <RedirectListButton appId={appId} />
      </Title>
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <div className={"grid grid-cols-3 gap-2"}>
          <ModifyAppButton appId={appId} appName={appName} fields={value} />
          <FieldAddButton value={value} setValue={setValue} />
        </div>
      </div>
      <div className={"space-y-2"}>
        {Object.entries(value).map(([index, field]) => (
          <AppField
            key={`field-${index}`}
            index={parseInt(index)}
            value={value}
            setValue={setValue}
            defaultField={field}
          />
        ))}
      </div>
    </div>
  );
};

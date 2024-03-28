"use client";

import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { AddAppField } from "@feature/app/create/AddAppField";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { FieldAddButton } from "@feature/app/create/FieldAddButton";
import { ModifyAppField } from "@feature/app/modify/ModifyAppField";
import { UpdateAppButton } from "@feature/app/modify/UpdateAppButton";
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
  const [value, setValue] = useState<AppFieldValue>(defaultFields);

  return (
    <div className={"space-y-10"}>
      <Title title={"アプリ設定"}>
        <RedirectListButton appId={appId} />
      </Title>
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <div className={"grid grid-cols-3 gap-2"}>
          <UpdateAppButton appId={appId} appName={appName} fields={value} />
          <FieldAddButton value={value} setValue={setValue} />
        </div>
      </div>
      <div className={"space-y-2"}>
        {Object.entries(value).map(([index, field]) => {
          if (field.mode === "add") {
            return (
              <AddAppField
                key={`field-${index}`}
                index={parseInt(index)}
                value={value}
                setValue={setValue}
              />
            );
          }
          return (
            <ModifyAppField
              key={`field-${index}`}
              index={parseInt(index)}
              value={value}
              setValue={setValue}
              defaultField={field}
            />
          );
        })}
      </div>
    </div>
  );
};

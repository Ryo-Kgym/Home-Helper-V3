"use client";

import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { AddAppField } from "@feature/app/create/AddAppField";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { CreateAppButton } from "@feature/app/create/CreateAppButton";
import { FieldAddButton } from "@feature/app/create/FieldAddButton";
import { FieldResetButton } from "@feature/app/create/FieldResetButton";

export const CreateAppClient = () => {
  const [appName, setAppName] = useState<string>("");
  const [value, setValue] = useState<AppFieldValue>({});

  return (
    <div className={"space-y-10"}>
      <Title title={"アプリ作成"} />
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <div className={"grid grid-cols-3 gap-2"}>
          <CreateAppButton appName={appName} fields={value} />
          <FieldAddButton value={value} setValue={setValue} />
          <FieldResetButton setValue={setValue} />
        </div>
      </div>
      <div className={"space-y-2"}>
        {Object.keys(value).map((index) => (
          <AddAppField
            key={`field-${index}`}
            index={parseInt(index)}
            value={value}
            setValue={setValue}
          />
        ))}
      </div>
    </div>
  );
};

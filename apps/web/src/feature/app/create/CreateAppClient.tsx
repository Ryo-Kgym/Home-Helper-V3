"use client";

import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useState } from "react";
import { AppAddField } from "@feature/app/create/AppAddField";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { CreateAppButton } from "@feature/app/create/CreateAppButton";
import { FieldAddButton } from "@feature/app/create/FieldAddButton";
import { FieldResetButton } from "@feature/app/create/FieldResetButton";

export const CreateAppClient = () => {
  const [appName, setAppName] = useState<string>("");
  const [value, setValue] = useState<AppFieldValue>({});
  const [fieldCount, setFieldCount] = useState<number>(0);

  return (
    <>
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <div className={"grid grid-cols-3 gap-2"}>
          <CreateAppButton appName={appName} value={value} />
          <FieldAddButton
            setValue={setValue}
            fieldCount={fieldCount}
            setFieldCount={setFieldCount}
          />
          <FieldResetButton setValue={setValue} setFieldCount={setFieldCount} />
        </div>
      </div>
      <div id={"field"} className={"space-y-2"}>
        {Object.values(value).map((field, index) => (
          <AppAddField
            key={`field-${index}`}
            index={index}
            value={value}
            setValue={setValue}
          />
        ))}
      </div>
    </>
  );
};

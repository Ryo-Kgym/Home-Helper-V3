"use client";

import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useEffect, useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { AddAppField } from "@feature/app/create/AddAppField";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { CreateAppButton } from "@feature/app/create/CreateAppButton";

export const CreateAppClient = () => {
  const [appName, setAppName] = useState<string>("");
  const [appFieldValue, setAppFieldValue] = useState<AppFieldValue>({});

  const calcNextIndex = () => {
    if (Object.keys(appFieldValue).length === 0) return 0;
    return (
      Math.max(...Object.keys(appFieldValue).map((v) => parseInt(v) ?? 0)) + 1
    );
  };

  const pushFieldHandler = (
    isEditing: boolean,
    value: AppFieldValue[number],
  ) => {
    if (isEditing) return;

    const nextIndex = calcNextIndex();
    setAppFieldValue({
      ...appFieldValue,
      [nextIndex]: value,
    });
  };

  useEffect(() => {
    console.log("[appFieldValue]", appFieldValue);
  }, [appFieldValue]);

  return (
    <div className={"space-y-10"}>
      <Title title={"アプリ作成"} />
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <div className={"grid grid-cols-3 gap-2"}>
          <CreateAppButton appName={appName} fields={appFieldValue} />
        </div>
      </div>
      <div className={"space-y-2"}>
        <AddAppField pushFieldHandler={pushFieldHandler} />
        {Object.keys(appFieldValue).map((index) => (
          <AddAppField
            key={`field-${index}`}
            pushFieldHandler={pushFieldHandler}
          />
        ))}
      </div>
    </div>
  );
};

"use client";

import type { FieldKind } from "@oneforall/domain/field/type";
import { useEffect, useState } from "react";
import { AppAddField } from "@feature/app/create/AppAddField";
import { AppNameInput } from "@feature/app/create/AppNameInput";

export const CreateAppClient = () => {
  const [appName, setAppName] = useState<string>("");
  const [value, setValue] = useState<AppFieldValue>({});

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <AppNameInput appName={appName} setAppName={setAppName} />
      <AppAddField index={0} value={value} setValue={setValue} />
      <AppAddField index={1} value={value} setValue={setValue} />
      <AppAddField index={2} value={value} setValue={setValue} />
    </>
  );
};

export type AppFieldValue = NonNullable<
  Record<
    number,
    {
      fieldName: string;
      fieldKind: FieldKind;
    }
  >
>;

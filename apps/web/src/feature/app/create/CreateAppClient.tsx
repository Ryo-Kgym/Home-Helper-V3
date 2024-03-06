"use client";

import type { FieldKind } from "@oneforall/domain/field/type";
import { useEffect, useState } from "react";
import { AppAddField } from "@feature/app/create/AppAddField";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { FieldAddButton } from "@feature/app/create/FieldAddButton";

export const CreateAppClient = () => {
  const [appName, setAppName] = useState<string>("");
  const [value, setValue] = useState<AppFieldValue>({});

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <div className={"grid grid-cols-2 space-x-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <FieldAddButton />
      </div>
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

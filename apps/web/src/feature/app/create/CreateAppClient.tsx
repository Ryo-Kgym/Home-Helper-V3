"use client";

import type { FieldKind } from "@oneforall/domain/field/type";
import { useEffect, useState } from "react";
import { AppAddField } from "@feature/app/create/AppAddField";

export const CreateAppClient = () => {
  const [value, setValue] = useState<AppFieldValue>({});

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <div className={"text-3xl"}>CreateAppClient</div>
      <div className={"space-y-2"}>
        <AppAddField index={0} value={value} setValue={setValue} />
        <AppAddField index={1} value={value} setValue={setValue} />
        <AppAddField index={2} value={value} setValue={setValue} />
      </div>
    </div>
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

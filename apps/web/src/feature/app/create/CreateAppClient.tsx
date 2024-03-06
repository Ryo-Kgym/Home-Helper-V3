"use client";

import type { FieldKind } from "@oneforall/domain/field/type";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { AppAddField } from "@feature/app/create/AppAddField";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { FieldAddButton } from "@feature/app/create/FieldAddButton";

export const CreateAppClient = () => {
  const [appName, setAppName] = useState<string>("");
  const [value, setValue] = useState<AppFieldValue>({});
  const [fieldComponent, setFieldComponent] = useState<ReactNode>([]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <FieldAddButton
          clickHandler={() => {
            const fieldIndex =
              document.getElementById("field")?.childElementCount ?? 0;

            setFieldComponent(
              <>
                <AppAddField
                  key={`field-${fieldIndex}`}
                  index={fieldIndex}
                  value={value}
                  setValue={setValue}
                />
                {fieldComponent}
              </>,
            );
          }}
        />
      </div>
      <div id={"field"} className={"space-y-2"}>
        {fieldComponent}
      </div>
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

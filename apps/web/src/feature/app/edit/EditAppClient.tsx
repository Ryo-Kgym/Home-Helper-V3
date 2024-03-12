"use client";

import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useState } from "react";
import { AppField } from "@feature/app/create/AppField";
import { AppNameInput } from "@feature/app/create/AppNameInput";

// import { CreateAppButton } from "@feature/app/create/CreateAppButton";
// import { FieldAddButton } from "@feature/app/create/FieldAddButton";
// import { FieldResetButton } from "@feature/app/create/FieldResetButton";

export const EditAppClient = ({
  appName: defaultAppName,
  fields: defaultFields,
}: {
  appName: string;
  fields: AppFieldValue;
}) => {
  const [appName, setAppName] = useState<string>(defaultAppName);
  const [value, setValue] = useState<AppFieldValue>(defaultFields);
  // const [fieldCount, setFieldCount] = useState<number>(
  //   Object.keys(value).length,
  // );

  return (
    <>
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <div className={"grid grid-cols-3 gap-2"}>
          {/*<CreateAppButton appName={appName} fields={value} />*/}
          {/*<FieldAddButton*/}
          {/*  setValue={setValue}*/}
          {/*  fieldCount={fieldCount}*/}
          {/*  setFieldCount={setFieldCount}*/}
          {/*/>*/}
          {/*<FieldResetButton setValue={setValue} setFieldCount={setFieldCount} />*/}
        </div>
      </div>
      <div className={"space-y-2"}>
        {Object.values(value).map((field, index) => (
          <AppField
            key={`field-${index}`}
            index={index}
            value={value}
            setValue={setValue}
            defaultField={field}
          />
        ))}
      </div>
    </>
  );
};

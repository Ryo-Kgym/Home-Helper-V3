"use client";

import { useEffect, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Title } from "@components/ui/v4/frame/Title";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { CreateAppButton } from "@feature/app/create/CreateAppButton";
import { FieldAddButton } from "@feature/app/create/FieldAddButton";
import {
  useGetAppFieldValue,
  useResetAppFieldValue,
} from "@feature/app/create/useAppFieldValueState";
import { AppFieldInput } from "@feature/app/field/AppFieldInput";

export const CreateAppClient = () => {
  const [appName, setAppName] = useState<string>("");
  const { fields } = useGetAppFieldValue();
  const reset = useResetAppFieldValue();

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className={"space-y-10"}>
      <Title title={"アプリ作成"} />
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <div className={"grid grid-cols-3 gap-2"}>
          <CreateAppButton appName={appName} />
          <FieldAddButton />
          <Button label={"はじめから"} clickHandler={reset} type={"reset"} />
        </div>
      </div>
      <div className={"space-y-2"}>
        {Object.keys(fields).map((_, index) => (
          <AppFieldInput key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

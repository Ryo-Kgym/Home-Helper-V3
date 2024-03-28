"use client";

import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Title } from "@components/ui/v4/frame/Title";
import { AddAppField } from "@feature/app/create/AddAppField";
import { AppNameInput } from "@feature/app/create/AppNameInput";
import { CreateAppButton } from "@feature/app/create/CreateAppButton";
import {
  useAppendAppFieldValue,
  useGetAppFieldValue,
  useResetAppFieldValue,
} from "@feature/app/create/useAppFieldValueState";

export const CreateAppClient = () => {
  const [appName, setAppName] = useState<string>("");
  const fields = useGetAppFieldValue();
  const append = useAppendAppFieldValue();
  const reset = useResetAppFieldValue();

  return (
    <div className={"space-y-10"}>
      <Title title={"アプリ作成"} />
      <div className={"grid grid-cols-2 gap-2"}>
        <AppNameInput appName={appName} setAppName={setAppName} />
        <div className={"grid grid-cols-3 gap-2"}>
          <CreateAppButton appName={appName} />
          <Button label={"フィールド追加"} clickHandler={append} type={"add"} />
          <Button label={"はじめから"} clickHandler={reset} type={"reset"} />
        </div>
      </div>
      <div className={"space-y-2"}>
        {Object.keys(fields).map((_, index) => (
          <AddAppField key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

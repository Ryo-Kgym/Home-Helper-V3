"use client";

import { useEffect, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Title } from "@components/ui/v4/frame/Title";
import { CreateViewButton } from "@feature/view/create/CreateViewButton";
import {
  useGetViewFieldValue,
  useResetViewFieldValue,
} from "@feature/view/create/useViewFieldValueState";
import { ViewFieldAddButton } from "@feature/view/create/ViewFieldAddButton";
import { ViewNameInput } from "@feature/view/create/ViewNameInput";
import { ViewFieldInput } from "@feature/view/field/ViewFieldInput";

export const CreateViewClient = () => {
  const [viewName, setViewName] = useState<string>("");
  const { fields } = useGetViewFieldValue();
  const reset = useResetViewFieldValue();

  useEffect(
    () => {
      reset();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className={"space-y-10"}>
      <Title title={"ビュー作成"} />
      <div className={"grid grid-cols-2 gap-2"}>
        <ViewNameInput viewName={viewName} setViewName={setViewName} />
        <div className={"grid grid-cols-3 gap-2"}>
          <CreateViewButton viewName={viewName} />
          <ViewFieldAddButton />
          <Button label={"はじめから"} clickHandler={reset} type={"reset"} />
        </div>
      </div>
      <div className={"space-y-2"}>
        {Object.keys(fields).map((index) => (
          <ViewFieldInput key={index} index={parseInt(index)} />
        ))}
      </div>
    </div>
  );
};

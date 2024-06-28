"use client";

import { useEffect, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Title } from "@components/ui/v4/frame/Title";
import { PageClientFrame } from "@components/ui/v4/PageClientFrame";
import { useGetViewFieldValue } from "@feature/view/create/useGetViewFieldValue";
import { useResetViewFieldValue } from "@feature/view/create/useResetViewFieldValue";
import { ViewFieldInput } from "@feature/view/field/ViewFieldInput";
import { CreateViewButton } from "@features/viewCreate/components/CreateViewButton";
import { ViewFieldAddButton } from "@pageComponents/viewCreate/components/ViewFieldAddButton";
import { ViewNameInput } from "@pageComponents/viewCreate/components/ViewNameInput";

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
    <PageClientFrame title={<Title title={"ビュー作成"} />}>
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
    </PageClientFrame>
  );
};

import React from "react";
import { Button } from "@components/ui/v4/button";
import { useAppendViewFieldValue } from "@feature/view/create/useAppendViewFieldValue";

export const ViewFieldAddButton = () => {
  const append = useAppendViewFieldValue();
  return <Button label={"フィールド追加"} clickHandler={append} type={"add"} />;
};

import React from "react";
import { Button } from "@components/ui/v4/button";
import { useAppendAppFieldValue } from "@feature/app/create/useAppFieldValueState";

export const FieldAddButton = () => {
  const append = useAppendAppFieldValue();
  return <Button label={"フィールド追加"} clickHandler={append} type={"add"} />;
};

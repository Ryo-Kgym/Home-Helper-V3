import { Button } from "@components/ui/v4/button";
import { useAppendAppFieldValue } from "@feature/app/create/useAppFieldValueState";
import React from "react";

export const FieldAddButton = () => {
  const append = useAppendAppFieldValue();
  return <Button label={"フィールド追加"} clickHandler={append} type={"add"} />;
};

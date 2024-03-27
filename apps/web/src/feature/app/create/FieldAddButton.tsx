import type { AppFieldValue } from "@feature/app/create/app-field-value";
import React from "react";
import { Button } from "@components/ui/v4/button";

export const FieldAddButton = ({
  value,
  setValue,
}: {
  value: AppFieldValue;
  setValue: (value: AppFieldValue) => void;
}) => {
  const calcNextIndex = () => {
    if (Object.keys(value).length === 0) return 0;
    return Math.max(...Object.keys(value).map((v) => parseInt(v) ?? 0)) + 1;
  };

  return (
    <Button
      label="フィールド追加"
      clickHandler={() => {
        const nextIndex = calcNextIndex();

        setValue({
          ...value,
          [nextIndex]: {
            fieldName: "",
            fieldKind: "text",
            options: {},
            mode: "add",
          },
        });
      }}
      type={"add"}
    />
  );
};

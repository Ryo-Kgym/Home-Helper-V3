import type { AppFieldValue } from "@feature/app/create/app-field-value";
import React from "react";
import { Button } from "@components/ui/v4/button";

export const FieldAddButton = ({
  value,
  setValue,
}: {
  value: AppFieldValue;
  setValue: React.Dispatch<React.SetStateAction<AppFieldValue>>;
}) => (
  <Button
    label="フィールド追加"
    clickHandler={() => {
      const nextIndex =
        Math.max(...Object.keys(value).map((v) => parseInt(v))) + 1;

      setValue((prev) => {
        return {
          ...prev,
          [nextIndex]: {
            fieldName: "",
            fieldKind: "text",
            options: {},
            mode: "add",
          },
        };
      });
    }}
    type={"add"}
  />
);

import type { AppFieldValue } from "@feature/app/create/app-field-value";
import React from "react";
import { Button } from "@components/ui/v4/button";

export const FieldAddButton = ({
  setValue,
  fieldCount,
  setFieldCount,
}: {
  setValue: React.Dispatch<React.SetStateAction<AppFieldValue>>;
  fieldCount: number;
  setFieldCount: (fieldCount: number) => void;
}) => (
  <Button
    label="フィールド追加"
    clickHandler={() => {
      setValue((prev) => {
        setFieldCount(fieldCount + 1);
        return {
          ...prev,
          [fieldCount]: {
            fieldName: "",
            fieldKind: "text",
            options: {},
          },
        };
      });
    }}
    type={"add"}
  />
);

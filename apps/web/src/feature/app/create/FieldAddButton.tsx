import type { AppFieldValue } from "@feature/app/create/app-field-value";
import React from "react";

export const FieldAddButton = ({
  setValue,
  fieldCount,
  setFieldCount,
}: {
  setValue: React.Dispatch<React.SetStateAction<AppFieldValue>>;
  fieldCount: number;
  setFieldCount: (fieldCount: number) => void;
}) => {
  return (
    <button
      className={"p-2 hover:bg-blue-100 active:bg-blue-300"}
      onClick={() => {
        setValue((prev) => {
          const newCount = fieldCount + 1;
          setFieldCount(newCount);
          return {
            ...prev,
            [newCount]: {
              fieldName: "",
              fieldKind: "text",
            },
          };
        });
      }}
    >
      フィールド追加
    </button>
  );
};

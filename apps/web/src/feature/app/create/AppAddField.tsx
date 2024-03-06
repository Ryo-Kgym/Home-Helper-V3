import type { AppFieldValue } from "@feature/app/create/CreateAppClient";
import type { FieldKind } from "@oneforall/domain/field/type";
import { useState } from "react";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";

export const AppAddField = ({
  index,
  value,
  setValue,
}: {
  index: number;
  value: AppFieldValue;
  setValue: (value: AppFieldValue) => void;
}) => {
  const [fieldName, setFieldName] = useState<string>(""); // [1
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");

  return (
    <>
      <TextInput
        label={"フィールド名"}
        value={fieldName}
        setValue={(v) => {
          setFieldName(v);
          setValue({
            ...value,
            [index]: {
              fieldName: v,
              fieldKind,
            },
          });
        }}
        required
        placeholder={"フィールド名を入力してください"}
      />
      <Select
        label={"フィールドの選択"}
        value={fieldKind}
        setValue={(v) => {
          setFieldKind(v);
          setValue({
            ...value,
            [index]: {
              fieldName,
              fieldKind: v,
            },
          });
        }}
        data={[
          { label: "Text", value: "text" },
          { label: "SelectBox", value: "selectBox" },
          { label: "MultipleText", value: "multipleText" },
        ]}
      />
    </>
  );
};

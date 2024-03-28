import type { FieldKind } from "@oneforall/domain/field/type";
import { useState } from "react";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { fieldKindArray } from "@oneforall/domain/field/type";

export const AddAppField = () => {
  const [fieldName, setFieldName] = useState<string>("");
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");

  const data = Object.values(fieldKindArray).map((f) => ({
    label: f.description,
    value: f.fieldKind,
  }));

  return (
    <div
      className={
        "flex items-center gap-2 border-2 border-gray-500 bg-green-50 p-2"
      }
    >
      <div className={"flex flex-1 gap-2"}>
        <Select
          label={"フィールドの選択"}
          value={fieldKind}
          setValue={(v) => {
            setFieldKind(v);
          }}
          data={data}
        />
        <TextInput
          label={"フィールド名"}
          value={fieldName}
          setValue={(v) => {
            setFieldName(v);
          }}
          required
          placeholder={"フィールド名を入力してください"}
        />
      </div>
    </div>
  );
};

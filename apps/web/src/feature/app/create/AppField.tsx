import type { AppFieldValue } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { useEffect, useState } from "react";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { FieldOptions } from "@feature/app/create/FieldOptions";
import { fieldKindArray } from "@oneforall/domain/field/type";

export const AppField = ({
  index,
  value,
  setValue,
}: {
  index: number;
  value: AppFieldValue;
  setValue: (value: AppFieldValue) => void;
}) => {
  const [fieldName, setFieldName] = useState<string>("");
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");
  const [options, setOptions] = useState<Record<string, never>>({});

  const data = Object.values(fieldKindArray).map((f) => ({
    label: f.description,
    value: f.fieldKind,
  }));

  useEffect(() => {
    setOptions({});
  }, [fieldKind]);

  return (
    <div
      id={`field-${index}`}
      className={"grid grid-cols-2 gap-2 border-2 border-gray-500 p-2"}
    >
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
              options,
            },
          });
        }}
        data={data}
      />
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
              options,
            },
          });
        }}
        required
        placeholder={"フィールド名を入力してください"}
      />
      <FieldOptions
        options={options}
        setOptions={(v) => {
          setOptions(v);
          setValue({
            ...value,
            [index]: {
              fieldName,
              fieldKind,
              options: v,
            },
          });
        }}
        fieldKind={fieldKind}
      />
    </div>
  );
};

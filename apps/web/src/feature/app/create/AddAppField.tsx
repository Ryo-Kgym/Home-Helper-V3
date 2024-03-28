import type { AppFieldValue } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { useState } from "react";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { DeleteFieldButton } from "@feature/app/create/DeleteFieldButton";
import { FieldOptions } from "@feature/app/create/FieldOptions";
import { fieldKindArray } from "@oneforall/domain/field/type";

export const AddAppField = ({
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
  const [options, setOptions] = useState<AppFieldValue[number]["options"]>({});

  const data = Object.values(fieldKindArray).map((f) => ({
    label: f.description,
    value: f.fieldKind,
  }));

  if (value[index]?.mode !== "add") {
    return null;
  }

  return (
    <div
      id={`field-${index}`}
      className={
        "flex items-center gap-2 border-2 border-gray-500 bg-green-50 p-2"
      }
    >
      <DeleteFieldButton index={index} value={value} setValue={setValue} />
      <div className={"flex flex-1 gap-2"}>
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
                mode: "add",
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
                mode: "add",
              },
            });
          }}
          required
          placeholder={"フィールド名を入力してください"}
        />
        <FieldOptions
          appFieldValue={value[index]!}
          options={options}
          setOptions={(v) => {
            setOptions(v);
            setValue({
              ...value,
              [index]: {
                fieldName,
                fieldKind,
                options: v,
                mode: "add",
              },
            });
          }}
        />
      </div>
    </div>
  );
};

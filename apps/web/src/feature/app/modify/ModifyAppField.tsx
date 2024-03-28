import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { useState } from "react";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { DeleteFieldButton } from "@feature/app/create/DeleteFieldButton";
import { ModifyFieldOptions } from "@feature/app/modify/ModifyFieldOptions";
import { fieldKindArray } from "@oneforall/domain/field/type";

export const ModifyAppField = ({
  index,
  value,
  setValue,
  defaultField,
}: {
  index: number;
  value: AppFieldValue;
  setValue: (value: AppFieldValue) => void;
  defaultField: AppFieldValue[number];
}) => {
  const [fieldName, setFieldName] = useState<string>(defaultField.fieldName);
  const [options, setOptions] = useState<AppFieldValue[number]["options"]>(
    defaultField.options,
  );

  const data = Object.values(fieldKindArray).map((f) => ({
    label: f.description,
    value: f.fieldKind,
  }));

  const deleteModeStyle = defaultField.mode === "delete" ? "bg-red-100" : "";

  if (value[index]?.mode == "add") {
    return null;
  }

  return (
    <div
      id={`field-${index}`}
      className={`flex items-center gap-2 border-2 border-gray-500 p-2 ${deleteModeStyle}`}
    >
      <DeleteFieldButton index={index} value={value} setValue={setValue} />
      <div className={"flex flex-1 gap-2"}>
        <Select
          label={"フィールドの選択"}
          disabled={true}
          value={defaultField.fieldKind}
          setValue={() => undefined}
          data={data}
        />
        <TextInput
          label={"フィールド名"}
          value={fieldName}
          setValue={(v) => {
            setFieldName(v);
            switch (defaultField.mode) {
              case "modify": {
                setValue({
                  ...value,
                  [index]: {
                    fieldName: v,
                    fieldKind: defaultField.fieldKind,
                    options,
                    id: defaultField.id,
                    mode: defaultField.mode,
                  },
                });
                break;
              }
            }
          }}
          required
          placeholder={"フィールド名を入力してください"}
          disabled={defaultField.mode === "delete"}
        />
        <ModifyFieldOptions
          appFieldValue={value[index]!}
          options={options}
          setOptions={(v) => {
            setOptions(v);
            switch (defaultField.mode) {
              case "modify": {
                setValue({
                  ...value,
                  [index]: {
                    fieldName,
                    fieldKind: defaultField.fieldKind,
                    options: v,
                    id: defaultField.id,
                    mode: defaultField.mode,
                  },
                });
                break;
              }
            }
          }}
          disabled={defaultField.mode === "delete"}
        />
      </div>
    </div>
  );
};

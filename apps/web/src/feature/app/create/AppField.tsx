import type { AppFieldValue } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { useEffect, useState } from "react";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { DeleteFieldButton } from "@feature/app/create/DeleteFieldButton";
import { FieldOptions } from "@feature/app/create/FieldOptions";
import { fieldKindArray } from "@oneforall/domain/field/type";

export const AppField = ({
  index,
  value,
  setValue,
  defaultField = {
    fieldName: "",
    fieldKind: "text",
    options: {},
    mode: "add",
  },
}: {
  index: number;
  value: AppFieldValue;
  setValue: (value: AppFieldValue) => void;
  defaultField?: AppFieldValue[number];
}) => {
  const [fieldName, setFieldName] = useState<string>(defaultField.fieldName);
  const [fieldKind, setFieldKind] = useState<FieldKind>(defaultField.fieldKind);
  const [options, setOptions] = useState<AppFieldValue[number]["options"]>(
    defaultField.options,
  );

  const data = Object.values(fieldKindArray).map((f) => ({
    label: f.description,
    value: f.fieldKind,
  }));

  useEffect(() => {
    if (!defaultField) {
      setOptions({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldKind]);

  const deleteModeStyle = defaultField.mode === "delete" ? "bg-red-100" : "";
  return (
    <div
      id={`field-${index}`}
      className={`flex gap-2 border-2 border-gray-500 p-2 ${deleteModeStyle}`}
    >
      <DeleteFieldButton index={index} value={value} setValue={setValue} />
      <div className={"flex flex-1 gap-2"}>
        <Select
          label={"フィールドの選択"}
          disabled={defaultField.mode !== "add"}
          value={fieldKind}
          setValue={(v) => {
            setFieldKind(v);
            switch (defaultField.mode) {
              case "add": {
                setValue({
                  ...value,
                  [index]: {
                    fieldName,
                    fieldKind: v,
                    options,
                    mode: defaultField.mode,
                  },
                });
                break;
              }
            }
          }}
          data={data}
        />
        <TextInput
          label={"フィールド名"}
          value={fieldName}
          setValue={(v) => {
            setFieldName(v);
            switch (defaultField.mode) {
              case "add": {
                setValue({
                  ...value,
                  [index]: {
                    fieldName: v,
                    fieldKind,
                    options,
                    mode: defaultField.mode,
                  },
                });
                break;
              }
              case "modify": {
                setValue({
                  ...value,
                  [index]: {
                    fieldName: v,
                    fieldKind,
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
        <FieldOptions
          appFieldValue={value[index]!}
          options={options}
          setOptions={(v) => {
            setOptions(v);
            switch (defaultField.mode) {
              case "add": {
                setValue({
                  ...value,
                  [index]: {
                    fieldName,
                    fieldKind,
                    options: v,
                    mode: defaultField.mode,
                  },
                });
                break;
              }
              case "modify": {
                setValue({
                  ...value,
                  [index]: {
                    fieldName,
                    fieldKind,
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

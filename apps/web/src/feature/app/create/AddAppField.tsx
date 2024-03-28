import type { AppFieldOptions } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { useEffect, useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Modal } from "@components/ui/v4/modal";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { addAppFieldValueSchema } from "@feature/app/create/app-field-value";
import { FieldOptionsInput } from "@feature/app/create/FieldOptionsInput";
import { useSaveAppFieldValue } from "@feature/app/create/useAppFieldValueState";
import { fieldKindArray } from "@oneforall/domain/field/type";

export const AddAppField = ({ index }: { index: number }) => {
  const [fieldName, setFieldName] = useState<string>("");
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");
  const [options, setOptions] = useState<AppFieldOptions>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  const save = useSaveAppFieldValue();

  const data = Object.values(fieldKindArray).map((f) => ({
    label: f.description,
    value: f.fieldKind,
  }));

  const parseResult = addAppFieldValueSchema.safeParse({
    fieldName,
    fieldKind,
    options,
    mode: "add",
  });

  useEffect(() => {
    setOptions({});
  }, [fieldKind]);

  return (
    <div
      className={
        "flex items-center gap-2 border-2 border-gray-500 bg-green-50 p-2"
      }
    >
      <div className={"text-gray-500"}>{saved ? "済" : "未"}</div>
      <div className={"flex flex-1 gap-2"}>
        <Select
          label={"フィールドの選択"}
          value={fieldKind}
          setValue={setFieldKind}
          data={data}
        />
        <TextInput
          label={"フィールド名"}
          value={fieldName}
          setValue={setFieldName}
          required
          placeholder={"フィールド名を入力してください"}
        />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <FieldOptionsInput
            fieldKind={fieldKind}
            options={options}
            setOptions={setOptions}
          />
        </Modal>
        <Button
          label={"設定"}
          clickHandler={() => setIsOpen(true)}
          type={"display"}
        />
        <Button
          label={"保存"}
          clickHandler={() => {
            if (!parseResult.success) {
              return;
            }
            save(index, parseResult.data);
            setSaved(true);
          }}
          type={"save"}
          disabled={!parseResult.success}
        />
      </div>
    </div>
  );
};

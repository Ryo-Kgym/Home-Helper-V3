import type {
  AppFieldOptions,
  AppFieldValue,
} from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Modal } from "@components/ui/v4/modal";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { FieldOptionsInput } from "@feature/app/create/FieldOptionsInput";
import { fieldKindArray } from "@oneforall/domain/field/type";

export const AddAppField = ({
  pushFieldHandler,
}: {
  pushFieldHandler: (isEditing: boolean, value: AppFieldValue[number]) => void;
}) => {
  const [fieldName, setFieldName] = useState<string>("");
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");
  const [options, setOptions] = useState<AppFieldOptions>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const data = Object.values(fieldKindArray).map((f) => ({
    label: f.description,
    value: f.fieldKind,
  }));

  const isEditing = fieldName === "";

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
          label={"追加"}
          clickHandler={() =>
            pushFieldHandler(isEditing, {
              fieldName,
              fieldKind: "text",
              options: {},
              mode: "add",
            })
          }
          type={"add"}
          disabled={isEditing}
        />
      </div>
    </div>
  );
};

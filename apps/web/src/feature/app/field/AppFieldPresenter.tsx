import type {
  AppFieldOptions,
  AppFieldValue,
} from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import type { SafeParseReturnType } from "zod";
import { Button } from "@components/ui/v4/button";
import { Modal } from "@components/ui/v4/modal";
import { Select } from "@components/ui/v4/select";
import { TextInput } from "@components/ui/v4/textInput";
import { FieldOptionsInput } from "@feature/app/create/FieldOptionsInput";

export const AppFieldPresenter = ({
  index,
  saved,
  setSaved,
  fieldKind,
  setFieldKind,
  data,
  fieldName,
  setFieldName,
  options,
  setOptions,
  isOpen,
  setIsOpen,
  parseResult,
  save,
}: {
  index: number;
  saved: boolean;
  setSaved: (value: boolean) => void;
  fieldKind: FieldKind;
  setFieldKind: (value: FieldKind) => void;
  data: { label: string; value: FieldKind }[];
  fieldName: string;
  setFieldName: (value: string) => void;
  options: AppFieldOptions;
  setOptions: (value: AppFieldOptions) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  parseResult: SafeParseReturnType<unknown, AppFieldValue[number]>;
  save: (index: number, value: AppFieldValue[number]) => void;
}) => (
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

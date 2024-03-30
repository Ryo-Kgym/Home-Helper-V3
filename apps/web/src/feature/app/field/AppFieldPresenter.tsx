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
import { fieldKindArray } from "@oneforall/domain/field/type";

export const AppFieldPresenter = ({
  saved,
  fieldKind,
  fieldName,
  options,
  isOpen,
  parseResult,
  saveHandler,
  settingOpenHandler,
  settingCloseHandler,
}: {
  saved: boolean;
  fieldKind: ValueState<FieldKind>;
  fieldName: ValueState;
  options: ValueState<AppFieldOptions>;
  isOpen: boolean;
  parseResult: SafeParseReturnType<unknown, AppFieldValue[number]>;
  saveHandler: () => void;
  settingOpenHandler: () => void;
  settingCloseHandler: () => void;
}) => (
  <>
    <div
      className={
        "flex items-center gap-2 border-2 border-gray-500 bg-green-50 p-2"
      }
    >
      <div className={"text-gray-500"}>{saved ? "済" : "未"}</div>
      <div className={"flex flex-1 gap-2"}>
        <Select
          label={"フィールドの選択"}
          value={fieldKind.value}
          setValue={fieldKind.setValue}
          disabled={fieldKind.disabled}
          data={FIELD_KIND_DATA}
        />
        <TextInput
          label={"フィールド名"}
          value={fieldName.value}
          setValue={fieldName.setValue}
          required
          placeholder={"フィールド名を入力してください"}
        />
        <Button
          label={"設定"}
          clickHandler={settingOpenHandler}
          type={"display"}
        />
        <Button
          label={"保存"}
          clickHandler={saveHandler}
          type={"save"}
          disabled={!parseResult.success}
        />
      </div>
    </div>
    <Modal isOpen={isOpen} onClose={settingCloseHandler}>
      <FieldOptionsInput
        fieldKind={fieldKind.value}
        options={options.value}
        setOptions={options.setValue}
      />
    </Modal>
  </>
);

type ValueState<T = string> = {
  value: T;
  setValue: (value: T) => void;
  disabled?: boolean;
};

const FIELD_KIND_DATA = Object.values(fieldKindArray).map((f) => ({
  label: f.description,
  value: f.fieldKind,
}));

import { FieldKind, fieldKindArray } from "@oneforall/domain/field/type";
import {
  AppFieldOptions,
  AppFieldValue,
} from "@oneforall/domain/schema/appFieldValue";

import { Button } from "~/components/ui/v4/button";
import { Modal } from "~/components/ui/v4/modal";
import { Select } from "~/components/ui/v4/select";
import { TextInput } from "~/components/ui/v4/textInput";
import { FieldOptionsInput } from "../../../features/fieldOptions/FieldOptionsInput";
import { DeleteFieldButton } from "./DeleteFieldButton";
import { SavedMark } from "./SavedMark";

export const AppFieldPresenter = ({
  mode,
  saved,
  fieldKind,
  fieldName,
  options,
  saveDisabled,
  isOpen,
  setIsOpen,
  saveHandler,
  deleteHandler,
}: {
  mode: AppFieldValue[number]["mode"];
  saved: boolean;
  fieldKind: ValueState<FieldKind>;
  fieldName: ValueState;
  options: ValueState<AppFieldOptions>;
  saveDisabled: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  saveHandler: () => void;
  deleteHandler: () => void;
}) => (
  <>
    <div
      className={`flex items-center gap-2 border-2 border-gray-500 ${modeMap[mode].bgColor} p-2`}
    >
      <SavedMark saved={saved} />
      <DeleteFieldButton mode={mode} onClick={deleteHandler} />
      <div className={"flex flex-1 gap-2"}>
        <Select
          label={"フィールドの選択"}
          {...fieldKind}
          data={FIELD_KIND_DATA}
        />
        <TextInput
          label={"フィールド名"}
          {...fieldName}
          required
          placeholder={"フィールド名を入力してください"}
        />
        <Button
          label={"設定"}
          clickHandler={() => setIsOpen(true)}
          type={"display"}
        />
        <Button
          label={"保存"}
          clickHandler={saveHandler}
          type={"save"}
          disabled={saveDisabled}
        />
      </div>
    </div>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <FieldOptionsInput fieldKind={fieldKind.value} {...options} />
    </Modal>
  </>
);

const modeMap: Record<AppFieldValue[number]["mode"], { bgColor: string }> = {
  add: { bgColor: "bg-green-50" },
  modify: { bgColor: "bg-blue-50" },
  delete: { bgColor: "bg-red-50" },
};

type ValueState<T = string> = {
  value: T;
  setValue: (value: T) => void;
  disabled?: boolean;
};

const FIELD_KIND_DATA = Object.values(fieldKindArray).map((f) => ({
  label: f.description,
  value: f.fieldKind,
}));

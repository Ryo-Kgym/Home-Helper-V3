import type { FieldOptionsFactoryProps } from "@feature/app/create/field-options-factory";
import { TextInput } from "@components/ui/v4/textInput";

export const FieldOptionsSelectBoxFactory = ({
  options,
  setOptions,
  disabled,
}: FieldOptionsFactoryProps) => {
  return (
    <TextInput
      label={"選択肢"}
      value={options.selector ?? ""}
      setValue={(v) => {
        setOptions({
          ...options,
          ["selector" as never]: v,
        });
      }}
      placeholder={"カンマ区切りで入力してください"}
      required
      disabled={disabled}
    />
  );
};

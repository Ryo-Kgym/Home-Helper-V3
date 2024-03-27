import type { SelectBoxOptions } from "@feature/app/create/app-field-value";
import { TextInput } from "@components/ui/v4/textInput";

export const FieldOptionsSelectBoxFactory = ({
  options,
  setOptions,
  disabled,
}: {
  options: SelectBoxOptions;
  setOptions: (options: SelectBoxOptions) => void;
  disabled?: boolean;
}) => {
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

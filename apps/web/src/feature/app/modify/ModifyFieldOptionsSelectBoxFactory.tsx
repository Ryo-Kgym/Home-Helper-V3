import type { ModifySelectBoxOptions } from "@feature/app/create/app-field-value";
import { TextInput } from "@components/ui/v4/textInput";

export const ModifyFieldOptionsSelectBoxFactory = ({
  options,
  setOptions,
  disabled,
}: {
  options: ModifySelectBoxOptions;
  setOptions: (options: ModifySelectBoxOptions) => void;
  disabled?: boolean;
}) => {
  return (
    <TextInput
      label={"選択肢"}
      value={options.selector.map((s) => s.label).join(",")}
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

import type { FieldKind } from "@oneforall/domain/field/type";
import { TextInput } from "@components/ui/v4/textInput";

export const FieldOptions = ({
  options,
  setOptions,
  fieldKind,
  disabled,
}: {
  options: Record<string, never>;
  setOptions: (options: Record<string, never>) => void;
  fieldKind: FieldKind;
  disabled?: boolean;
}) => {
  switch (fieldKind) {
    case "selectBox":
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
    default:
      return undefined;
  }
};

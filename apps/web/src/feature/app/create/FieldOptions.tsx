import type { FieldKind } from "@oneforall/domain/field/type";
import { TextInput } from "@components/ui/v4/textInput";

export const FieldOptions = ({
  options,
  setOptions,
  fieldKind,
}: {
  options: Record<string, never>;
  setOptions: (options: Record<string, never>) => void;

  fieldKind: FieldKind;
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
        />
      );
    default:
      return undefined;
  }
};

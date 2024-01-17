import { TextInput } from "react-native";

import type { EditableProps } from "~/ui/editable/editable-props";

export const EditableMemo = ({
  value,
  setValue,
  className = "",
  disabled = false,
  defaultValue,
}: EditableProps<string | null>) => {
  return (
    <TextInput
      className={`${className} rounded-xl border-2 border-gray-200 bg-gray-100 p-2`}
      numberOfLines={4}
      multiline={true}
      onChangeText={setValue}
      editable={!disabled}
      inputMode={"text"}
      placeholder={defaultValue ?? undefined}
    >
      {value}
    </TextInput>
  );
};

import { TextInput } from "react-native";

import type { EditableProps } from "~/ui/editable/editable-props";
import { FiledFrame } from "~/ui/FiledFrame";

export const EditableMemo = ({
  value,
  setValue,
  className = "",
  disabled = false,
  defaultValue,
}: EditableProps<string | null>) => {
  return (
    <FiledFrame>
      <TextInput
        className={className}
        numberOfLines={4}
        multiline={true}
        onChangeText={setValue}
        editable={!disabled}
        inputMode={"text"}
        placeholder={defaultValue ?? undefined}
      >
        {value}
      </TextInput>
    </FiledFrame>
  );
};

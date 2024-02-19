import { TextInput } from "react-native";

import { FiledFrame } from "~/ui/FiledFrame";

export const TextField = ({
  value,
  setValue,
  disabled = false,
  placeholder,
}: {
  value: string;
  setValue: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}) => {
  return (
    <FiledFrame>
      <TextInput
        className={"text-xl"}
        onChangeText={setValue}
        editable={!disabled}
        inputMode={"text"}
        placeholder={placeholder}
      >
        {value}
      </TextInput>
    </FiledFrame>
  );
};

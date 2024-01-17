import { TextInput } from "react-native";

import type { IocomeType } from "~/types/iocome-type";
import type { EditableProps } from "~/ui/editable/editable-props";
import { Amount } from "../Amount";

export const EditableAmount = ({
  value,
  setValue,
  className = "",
  iocomeType,
  disabled = false,
  defaultValue,
}: EditableProps<number> & { iocomeType: IocomeType }) => {
  if (disabled) {
    return (
      <Amount className={className} amount={value} iocomeType={iocomeType} />
    );
  }

  return (
    <TextInput
      className={`${className} rounded-xl border-2 border-gray-200 bg-gray-100 p-2`}
      onChange={(e) => setValue(Number(e.nativeEvent.text))}
      editable={!disabled}
      inputMode={"numeric"}
      placeholder={String(defaultValue)}
    >
      {value}
    </TextInput>
  );
};

import { TextInput } from "react-native";

import type { IocomeType } from "~/types/iocome-type";
import type { EditableProps } from "~/ui/editable/editable-props";
import { FiledFrame } from "~/ui/FiledFrame";
import { Amount } from "../Amount";

export const EditableAmount = ({
  value,
  setValue,
  className = "",
  iocomeType,
  disabled = false,
  defaultValue,
}: EditableProps<number> & { iocomeType: IocomeType }) => {
  return (
    <FiledFrame>
      {disabled ? (
        <Amount className={className} amount={value} iocomeType={iocomeType} />
      ) : (
        <TextInput
          className={className}
          onChange={(e) => setValue(Number(e.nativeEvent.text))}
          editable={!disabled}
          inputMode={"numeric"}
          placeholder={String(defaultValue)}
        >
          {value}
        </TextInput>
      )}
    </FiledFrame>
  );
};

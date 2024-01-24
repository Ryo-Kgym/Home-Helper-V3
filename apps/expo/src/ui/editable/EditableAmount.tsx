import { TextInput } from "react-native";

import type { IocomeType } from "~/types/iocome-type";
import type { EditableProps } from "~/ui/editable/editable-props";
import { FiledFrame } from "~/ui/FiledFrame";
import { Amount } from "../Amount";

export const EditableAmount = ({
  value,
  setValue,
  iocomeType,
  disabled = false,
  defaultValue,
}: EditableProps<number | null> & { iocomeType: IocomeType }) => (
  <FiledFrame>
    {disabled ? (
      <Amount amount={value} iocomeType={iocomeType} />
    ) : (
      <TextInput
        className={"text-right text-xl"}
        onChange={(e) => {
          // 値が数値のみをsetValueに設定する
          const value = e.nativeEvent.text;
          const numberValue = Number(value);
          if (isNaN(numberValue)) return;
          setValue(numberValue);
        }}
        editable={!disabled}
        inputMode={"numeric"}
        placeholder={defaultValue ? String(defaultValue) : ""}
        value={value ? String(value) : ""}
      />
    )}
  </FiledFrame>
);

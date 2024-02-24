import { useState } from "react";
import { Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

import type { PickerProps } from "./props";
import { Modal } from "../Modal";

export const ReactNativePicker = <T,>({
  value,
  setValue,
  data,
  disabled = false,
}: PickerProps<T>) => {
  const [open, setOpen] = useState(false);
  const title = data.filter((d) => d.value === value)[0]?.label ?? "未選択";

  return (
    <>
      <Button title={title} onPress={() => setOpen(true)} disabled={disabled} />
      <Modal visible={open} setVisible={setOpen}>
        <Picker
          selectedValue={value ?? data[0]?.value}
          onValueChange={setValue}
          itemStyle={{ height: 250, fontSize: 18 }}
        >
          {data
            .filter(
              (d) =>
                // disabledがfalseの場合は、全て表示する
                !disabled ||
                // disableの場合は、valueが一致するものだけ表示する
                (disabled && d.value === value),
            )
            .map((d) => (
              <Picker.Item
                key={String(d.value)}
                label={d.label}
                value={d.value}
              />
            ))}
        </Picker>
      </Modal>
    </>
  );
};

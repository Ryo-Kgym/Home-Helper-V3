import { Picker } from "@react-native-picker/picker";

import type { PickerProps } from "~/ui/Picker/props";

export const ReactNativePicker = <T,>({
  value,
  setValue,
  data,
  disabled = false,
}: PickerProps<T>) => (
  <Picker
    selectedValue={value}
    onValueChange={setValue}
    itemStyle={{ height: 60, fontSize: 18 }}
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
        <Picker.Item key={String(d.value)} label={d.label} value={d.value} />
      ))}
  </Picker>
);

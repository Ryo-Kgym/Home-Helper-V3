import { Picker as RNPicker } from "@react-native-picker/picker";

export const Picker = <T,>({
  value,
  setValue,
  data,
  disabled = false,
}: {
  value: T;
  setValue: (value: T) => void;
  data: { value: T; label: string }[];
  disabled?: boolean;
}) => (
  <RNPicker
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
        <RNPicker.Item key={String(d.value)} label={d.label} value={d.value} />
      ))}
  </RNPicker>
);

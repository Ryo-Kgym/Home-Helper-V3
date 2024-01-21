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
    enabled={!disabled}
  >
    {data.map((account) => (
      <RNPicker.Item
        key={String(account.value)}
        label={account.label}
        value={account.value}
      />
    ))}
  </RNPicker>
);

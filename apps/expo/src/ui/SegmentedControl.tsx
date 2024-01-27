import NRSegmentedControl from "@react-native-segmented-control/segmented-control";

export const SegmentedControl = <T,>({
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
  <NRSegmentedControl
    values={data.map((item) => item.label)}
    selectedIndex={data.findIndex((item) => item.value === value)}
    onChange={(event) => {
      setValue(data[event.nativeEvent.selectedSegmentIndex]?.value ?? value);
    }}
    enabled={!disabled}
  />
);

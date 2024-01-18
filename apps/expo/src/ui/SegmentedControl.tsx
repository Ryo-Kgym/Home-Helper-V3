import NRSegmentedControl from "@react-native-segmented-control/segmented-control";

export const SegmentedControl = <T,>({
  value,
  setValue,
  data,
}: {
  value: T;
  setValue: (value: T) => void;
  data: { value: T; label: string }[];
}) => (
  <NRSegmentedControl
    values={data.map((item) => item.label)}
    selectedIndex={data.findIndex((item) => item.value === value)}
    onChange={(event) => {
      setValue(data[event.nativeEvent.selectedSegmentIndex]?.value ?? value);
    }}
  />
);

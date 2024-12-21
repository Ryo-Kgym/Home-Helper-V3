import type { MantineSize } from "@mantine/core";
import { SegmentedControl } from "@mantine/core";

type Props<T extends string> = {
  value: T;
  onChange: (_: T) => void;
  data: SegmentData<T>[];
  size?: MantineSize;
  disabled?: boolean;
};

type SegmentData<T extends string> = {
  value: T;
  label: string;
};

export const Segment = <T extends string>({
  value,
  onChange,
  data,
  size = "md",
  disabled = false,
}: Props<T>) => (
  <>
    <SegmentedControl
      color="lime"
      fullWidth
      size={size}
      radius={"xl"}
      value={value}
      onChange={(value) => onChange(value as T)}
      data={data}
      disabled={disabled}
    />
  </>
);

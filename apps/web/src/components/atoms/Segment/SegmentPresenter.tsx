/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { MantineSize, SegmentedControl } from "@mantine/core";

type SegmentPresenterProps = {
  value: string;
  onChange: (_: string) => void;
  data: SegmentData[];
  size?: MantineSize;
  disabled?: boolean;
};
export const SegmentPresenter = ({
  value,
  onChange,
  data,
  size = "md",
  disabled = false,
}: SegmentPresenterProps) => (
  <>
    <SegmentedControl
      color="lime"
      fullWidth
      size={size}
      radius={"xl"}
      value={value}
      onChange={onChange}
      data={data}
      disabled={disabled}
    />
  </>
);

type SegmentData = {
  value: string;
  label: string;
};

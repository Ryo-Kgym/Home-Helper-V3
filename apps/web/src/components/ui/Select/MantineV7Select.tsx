/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { MantineSize, Select } from "@mantine/core";
import { SelectData } from "../Select";

type MantineSelectProps = {
  label: string;
  value: string | null;
  onChange: (_: string | null) => void;
  data: SelectData[];
  placeholder?: string;
  maxDropdownHeight?: number;
  size?: MantineSize;
  withAsterisk?: boolean;
  disabled?: boolean;
};

export const MantineV7Select = ({
  label,
  value,
  onChange,
  data,
  placeholder = "",
  maxDropdownHeight = 200,
  size = "lg",
  withAsterisk = false,
  disabled = false,
}: MantineSelectProps) => {
  // TODO 必要性を検討する。
  // const optionsFilter: OptionsFilter = ({ options, search }) => {
  //   return options.filter((option) => {
  //     if ("items" in option) {
  //       return option.items.some((item) =>
  //         item.label.toLowerCase().includes(search.toLowerCase()),
  //       );
  //     } else {
  //       return option.label.toLowerCase().includes(search.toLowerCase());
  //     }
  //   });
  // };

  const valueIsInvalid = value === null || value?.length === 0;

  const error = withAsterisk && valueIsInvalid ? "Required" : "";

  return (
    <Select
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data={data}
      // searchable
      maxDropdownHeight={maxDropdownHeight}
      // filter={optionsFilter}
      size={size}
      withAsterisk={withAsterisk}
      error={error}
      disabled={disabled}
    />
  );
};

/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Textarea } from "@mantine/core";

import type { MantineSize } from "@mantine/core";
import type { ChangeEvent } from "react";

export const MantineTextarea = ({
  label,
  value,
  setValue,
  placeholder,
  withAsterisk,
  size = "lg",
  disabled = false,
}: {
  label: string;
  value: string;
  setValue: (_: string) => void;
  placeholder?: string;
  withAsterisk?: boolean;
  size?: MantineSize;
  disabled?: boolean;
}) => (
  <Textarea
    label={label}
    value={value}
    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.currentTarget.value);
    }}
    placeholder={placeholder}
    withAsterisk={withAsterisk}
    size={size}
    disabled={disabled}
  />
);

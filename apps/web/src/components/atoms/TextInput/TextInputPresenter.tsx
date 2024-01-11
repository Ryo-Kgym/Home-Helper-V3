/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { TextInput } from "@mantine/core";
import { ChangeEventHandler } from "react";

export const TextInputPresenter = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  withAsterisk,
  disabled,
}: {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error: string;
  withAsterisk?: boolean;
  disabled: boolean;
}) => (
  <TextInput
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    label={label}
    error={error}
    size="lg"
    withAsterisk={withAsterisk}
    disabled={disabled}
  />
);

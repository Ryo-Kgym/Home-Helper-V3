/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { TextInputPresenter } from "@components/atoms/TextInput/TextInputPresenter";

export const TextInputContainer = ({
  label,
  value,
  onChange,
  placeholder,
  withAsterisk,
  disabled = false,
  maxLength = 32,
}: {
  label: string;
  value: string;
  onChange: (_: string) => void;
  placeholder?: string;
  withAsterisk?: boolean;
  disabled?: boolean;
  maxLength?: number;
}) => {
  const checkValue = (value: string) => {
    if (value === "") {
      return "Required";
    }
    if (value.length > maxLength) {
      return `Too long. Until ${maxLength} characters}`;
    }
    return "";
  };

  return (
    <TextInputPresenter
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      error={checkValue(value)}
      withAsterisk={withAsterisk}
      disabled={disabled}
    />
  );
};

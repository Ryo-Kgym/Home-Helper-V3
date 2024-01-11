/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import "dayjs/locale/ja";
import { MantineSize } from "@mantine/core";
import { DateInput, DateValue } from "@mantine/dates";

export const MantineDatePicker = ({
  value,
  onChange,
  label,
  defaultValue = new Date(),
  placeholder = "",
  size = "lg",
  disabled = false,
  required = false,
}: {
  value: Date;
  onChange: (_: Date) => void;
  label?: string;
  defaultValue?: Date;
  placeholder?: string;
  size?: MantineSize;
  disabled?: boolean;
  required?: boolean;
}) => {
  const error = required && value === null ? "Required" : "";

  const onChangeHandler = (value: DateValue) => {
    if (value instanceof Date) {
      onChange(value);
    }
  };

  return (
    <DateInput
      value={new Date(value)}
      onChange={onChangeHandler}
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      withAsterisk={required}
      size={size}
      valueFormat="YYYY-MM-DD"
      monthLabelFormat={"YYYY-MM"}
      monthsListFormat={"MM"}
      firstDayOfWeek={0}
      error={error}
      disabled={disabled}
      locale="ja"
    />
  );
};
